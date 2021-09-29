/*
 * Extract + Transform + Load
 * CSV Data to PostgreSQL
 *
 * command: $ CSV_FOLDER=myCSVFolder TARGET_FILE=myTableName node etl.js
 *
 * FILES:
 *   <rootDir>/etl.js
 *   <rootDir>/config/db.config.js
 *   <rootDir>/<CSV_FOLDER>/<TARGET_FILE>.csv
 */

// Read BULK Loading in Postgres:
// https://www.mydatahack.com/bulk-loading-postgres-with-node-js/

// Example: CSV_FOLDER=csvFiles TARGET_FILE=photos node etl.js

// Import required modules
const fs = require('fs');
const path = require('path');
const { Pool, Client } = require('pg');
const copyFrom = require('pg-copy-streams').from;
const config = require('./config/db.config');

const {
  host, password, user, database, port,
} = config;

const targetFileName = process.env.TARGET_FILE;
if (!targetFileName) {
  throw new Error(
    'please specify CSV file name: "TARGET_FILE=customers ... node index.js"',
  );
}

const csvFolder = process.env.CSV_FOLDER;
if (!csvFolder) {
  throw new Error(
    'please specify CSV folder name: "CSV_FOLDER=csvFiles ... node index.js"',
  );
}

// inputfile & target table
const inputFile = path.join(__dirname, `${csvFolder}/${targetFileName}.csv`);
// var table = 'usermanaged.customers'
const table = `${targetFileName}`;

// Getting connectin parameters from config.json
const conString = `postgres://${user}:${password}@${host}:${port}/${database}`;

// Connecting to Database
const client = new Client({
  connectionString: conString,
});
client.connect();

const executeQuery = (targetTable) => {
  const execute = (target, callback) => {
    client.query(`Truncate ${target}`, (err) => {
      if (err) {
        client.end();
        callback(err);
        // return console.log(err.stack)
      } else {
        console.log(`Truncated ${target}`);
        callback(null, target);
      }
    });
  };
  // eslint-disable-next-line consistent-return
  execute(targetTable, (err) => {
    if (err) return console.log(`Error in Truncate Table: ${err}`);
    const stream = client.query(
      copyFrom(`COPY ${targetTable} FROM STDIN DELIMITER ',' CSV HEADER`),
    );
    const fileStream = fs.createReadStream(inputFile);

    // Debug the stream input
    // fileStream.on('data', (chunk) => console.log(chunk.toString('utf8')));

    fileStream.on('error', (error) => {
      console.log(`Error in creating read stream ${error}`);
    });

    stream.on('error', (error) => {
      console.log(`Error in creating stream ${error}`);
      client.end();
    });
    stream.on('end', () => {
      console.log(`Completed loading data into ${targetTable}`);
      client.end();
    });
    fileStream.pipe(stream);
  });
};
// Execute the function
executeQuery(table);
