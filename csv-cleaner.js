// /*
//  * command: $ CSV_FOLDER=myCSVFolder TARGET_FILE=myTableName node csv-cleaner.js
//  *
//  * FILES:
//  *   <rootDir>/csv-cleaner.js
//  *   <rootDir>/<CSV_FOLDER>/<TARGET_FILE>.csv
//  *   <rootDir>/clean/
//  */

// // Using Node streams to make a .csv cleaner
// // https://dev.to/zluther89/using-node-streams-to-make-a-csv-cleaner-148m//

// // Example: CSV_FOLDER=csvFiles TARGET_FILE=photos node csv-cleaner.js

const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');

/*
 * Set up the file paths
 */
const DELIMITER = ',';

const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

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

const inputFile = path.join(__dirname, `${csvFolder}/${targetFileName}.csv`);
const outputFile = path.join(
  __dirname,
  `${csvFolder}/clean/${targetFileName}.csv`,
);

/*
 * CLEAN + TRANSFORM a CSV line string
 */
const transformCSVLine = (lineStr, delimiter = ',') => {
  const columns = lineStr.split(delimiter);

  const terminateValQuotes = (value) => {
    if (/['"\n]/.test(value)) {
      return `"${value.replace(/['"\n]+/g, '')}"`;
    }
    return value;
  };

  const formattedCols = columns.map((value) => {
    let formatted = value;
    formatted = terminateValQuotes(value);
    // formatted = trimString(value, maxLength);
    return formatted;
  });

  return `${formattedCols.join(delimiter)}\n`;
};

/*
 * Run the CSV file READ/WRITE operations
 */
const writestream = fs.createWriteStream(outputFile);

const lineReader = require('readline').createInterface({
  input: fs.createReadStream(inputFile),
});

lineReader
  .on('line', (line) => {
    writestream.write(transformCSVLine(line, DELIMITER));
  })
  .on('close', () => {
    console.log(
      `Created file: <rootDir>/${csvFolder}/clean/${targetFileName}.csv`,
    );
  });
