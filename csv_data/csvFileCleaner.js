/*
 * Clean CSV file lines/errors
 * Generate a new CSV file
 */

// Using Node streams to make a .csv cleaner
// https://dev.to/zluther89/using-node-streams-to-make-a-csv-cleaner-148m//

const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Access the enviroment variables
dotenv.config();

/*
 * Set up the file paths
 */
const DELIMITER = process.env.DELIMITER || ',';
const POST_DELIMITER = process.env.POST_DELIMITER || '|';

const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const targetFileName = process.env.TARGET_FILE;
if (!targetFileName) {
  throw new Error(
    'please specify CSV file name: "TARGET_FILE=customers ... node index.js"',
  );
}

const outputFolder = path.join(__dirname, `${process.env.OUTPUT_FOLDER}`);
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const inputFile = path.join(__dirname, `${targetFileName}.csv`);

const outputFile = path.join(
  __dirname,
  `${process.env.OUTPUT_FOLDER}/${targetFileName}.csv`,
);

/*
 * CLEAN + TRANSFORM a CSV line string
 */
const transformCSVLine = (lineStr, delimiter = ',', isFirstLine = false) => {
  const columns = lineStr.split(delimiter);

  const terminateValQuotes = (value) => {
    if (/["\n]/.test(value)) {
      return `"${value.replace(/["\n]+/g, '')}"`;
    }
    return value;
  };

  const formattedCols = columns.map((value) => {
    let formatted = value;
    formatted = terminateValQuotes(value);
    // formatted = trimString(value, maxLength);
    return formatted;
  });

  if (isFirstLine) {
    const onlySnakeCase = formattedCols.map((columnStr) => camelToSnakeCase(columnStr));
    return `${onlySnakeCase.join('|')}`;
  }
  return `\n${formattedCols.join('|')}`;
};

/*
 * Run the CSV file READ/WRITE operations
 */
const writestream = fs.createWriteStream(outputFile);

const lineReader = require('readline').createInterface({
  input: fs.createReadStream(inputFile),
});

let isFirstLine = true;
lineReader
  .on('line', (line) => {
    writestream.write(transformCSVLine(line, DELIMITER, isFirstLine));
    isFirstLine = false;
  })
  .on('close', () => {
    console.log(
      `Created file: <rootDir>/${outputFolder}/${targetFileName}.csv`,
    );
  });
