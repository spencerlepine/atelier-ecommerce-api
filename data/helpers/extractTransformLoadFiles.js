/*
 * Extract + Transform + Load
 * CSV Data to PostgreSQL
 */

// Read BULK Loading in Postgres:
// https://www.mydatahack.com/bulk-loading-postgres-with-node-js/

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { Pool, Client } = require('pg');
const dotenv = require('dotenv');
const config = require('../../config/db.config');

const DELIMITER = process.env.DELIMITER || ',';

// Access the enviroment variables
dotenv.config();

const TARGET_FILE_NAME = process.env.TARGET_FILE;
if (!TARGET_FILE_NAME) {
  throw new Error(
    'please specify CSV file name: "TARGET_FILE=customers ... node helperFile.js"',
  );
}

const csvFolder = process.env.OUTPUT_FOLDER;
const inputFile = path.join(
  __dirname,
  `../${csvFolder}/${TARGET_FILE_NAME}.csv`,
);
const table = `${TARGET_FILE_NAME}`;

const client = new Client({ connectionString: config.connectionString });
client.connect();

const loadTableEntry = (tableName = 'missingTableName', headers, values) => {
  const loadQuery = `INSERT INTO ${tableName}(${headers.join(
    ',',
  )}) VALUES ${values}`;

  client.query(loadQuery, (err) => {
    if (err) {
      client.end();
      console.log(` [FAILED] to load ${values}`);
      // callback(err);
    } else {
      console.log(` * LOADED ${values}`);
      // callback(null, target);
    }
  });
};

// Reading the CSV file line by line
const readFileLines = (rl) => {
  let headers;

  rl.on('line', (line) => {
    console.log(line);
    const columns = line.split(DELIMITER);
    if (!headers) {
      headers = columns.slice();
      console.log(`* FOUND headers: [ ${headers} ]`);
    } else {
      loadTableEntry(TARGET_FILE_NAME, headers, columns);
    }
  }).on('close', () => {
    console.log(`* LOADED Successfully: ${TARGET_FILE_NAME}.csv\n`);
    process.exit(1);
  });
};

const truncateTable = (target, nextCallback) => {
  const truncateQuery = `\
    BEGIN;\
    ALTER TABLE ${target} DISABLE TRIGGER ALL;\
    Truncate ${target} CASCADE;\
    ALTER TABLE ${target} ENABLE TRIGGER ALL;\
    COMMIT
  `;

  client.query(truncateQuery, (err) => {
    if (err) {
      client.end();
      nextCallback(err);
    } else {
      console.log(` - SUCCESS truncated ${target}`);
      nextCallback(null, target);
    }
  });
};

// eslint-disable-next-line import/order
const lineReader = require('readline').createInterface({
  input: fs.createReadStream(inputFile),
});

// Truncate the table, then load the data
truncateTable(TARGET_FILE_NAME, (err, result) => {
  if (err) {
    console.log(` - FAILED: unable to truncate ${TARGET_FILE_NAME} table`);
  } else {
    console.log(` - SUCCESS: truncated the ${TARGET_FILE_NAME} table`);
    readFileLines(lineReader);
  }
});
