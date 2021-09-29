/*
 * Extract + Transform + Load
 * CSV Data to PostgreSQL
 *
 * command (one line):
 *  OUTPUT_FOLDER=../csvFilesClean CSV_FOLDER=../csvFiles
 *    TARGET_FILE=myTableName node /path/to/helpers/extractTransformLoadFiles.js
 */

// Read BULK Loading in Postgres:
// https://www.mydatahack.com/bulk-loading-postgres-with-node-js/

const fs = require('fs');
const path = require('path');
const { Pool, Client } = require('pg');
const copyFrom = require('pg-copy-streams').from;
const config = require('../../config/db.config');

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

const {
  host, password, user, database, port,
} = config;
const inputFile = path.join(__dirname, `${csvFolder}/${targetFileName}.csv`);
const table = `${targetFileName}`;
const conString = `postgres://${user}:${password}@${host}:${port}/${database}`;

const client = new Client({
  connectionString: conString,
});
client.connect();

const executeQuery = (targetTable) => {
  const execute = (target, callback) => {
    client.query(
      `BEGIN;\
      ALTER TABLE ${target} DISABLE TRIGGER ALL;\
      Truncate ${target} CASCADE;\
      ALTER TABLE ${target} ENABLE TRIGGER ALL;\
      COMMIT;`,
      (err) => {
        if (err) {
          client.end();
          callback(err);
        } else {
          console.log(` * Truncated ${target}`);
          callback(null, target);
        }
      },
    );
  };
  // eslint-disable-next-line consistent-return
  execute(targetTable, (err) => {
    if (err) return console.log(` > [${targetTable}] FAILED truncating: ${err}\n`);
    const stream = client.query(
      copyFrom(`COPY ${targetTable} FROM STDIN DELIMITER ',' CSV HEADER`),
    );
    const fileStream = fs.createReadStream(inputFile);

    // HERE: failing to copy over data from CSV
    // client.query(`COPY ${targetTable} FROM ${inputFile} DELIMITER ',' CSV HEADER`);
    // const copyQuery = '\\COPY product FROM
    // \'/data-clean/product.csv\' DELIMITER \',\' CSV HEADER';
    // client.query(copyQuery, (res) => {
    //   console.log(res);
    // });

    fileStream.on('error', (error) => {
      console.log(`Error in creating read stream ${error}\n`);
    });

    stream.on('error', (error) => {
      console.log(` > [${targetTable}] FAILED creating stream ${error}\n`);
      client.end();
    });
    stream.on('end', () => {
      console.log(` * Completed loading data into ${targetTable} TABLE\n`);
      client.end();
    });
    fileStream.pipe(stream);
  });
};

executeQuery(table);
