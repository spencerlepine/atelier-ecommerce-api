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

// /* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable no-underscore-dangle */
// /* eslint-disable guard-for-in */
// /* eslint-disable no-useless-constructor */
// /* eslint-disable no-restricted-syntax */
// const csv = require('csv-parser');
// const path = require('path');
// const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
// const fs = require('fs');
// const parse = require('csv-parse');
// const { Transform } = require('stream');

// // Convert from camel case to snake case
// const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

// const targetFileName = process.env.TARGET_FILE;
// if (!targetFileName) {
//   throw new Error(
//     'please specify CSV file name: "TARGET_FILE=customers ... node index.js"',
//   );
// }

// const csvFolder = process.env.CSV_FOLDER;
// if (!csvFolder) {
//   throw new Error(
//     'please specify CSV folder name: "CSV_FOLDER=csvFiles ... node index.js"',
//   );
// }

// const inputFile = path.join(__dirname, `${csvFolder}/${targetFileName}.csv`);
// const outputFile = path.join(
//   __dirname,
//   `${csvFolder}/clean/${targetFileName}.csv`,
// );

// /* GET FILE HEADERS */
// const readline = require('readline');

// const getFirstLine = async (pathToFile) => {
//   const readable = fs.createReadStream(pathToFile);
//   const reader = readline.createInterface({ input: readable });

//   const lineReader = new Promise((resolve) => {
//     reader.on('line', (thisLine) => {
//       reader.close();
//       resolve(thisLine);
//     });
//   });
//   const line = await lineReader;

//   readable.close();
//   return line;
// };

// const firstLineToHeadersObject = (lineString, DELIMITER = ',') => {
//   const columns = lineString.split(DELIMITER);
//   const headers = [];

//   columns.forEach((colName) => {
//     const formatted = camelToSnakeCase(colName).replace(/"/g, '');
//     headers.push({ id: formatted, title: formatted });
//   });

//   return headers;
// };

// const firstLineToHeadersArray = (lineString, DELIMITER = ',') => (
//   lineString.split(DELIMITER).map((colName) => (
//     camelToSnakeCase(colName).replace(/"/g, '')
//   ))
// );
// /* ***************** */

// (async () => {
//   const firstLine = await getFirstLine(inputFile);

//   const headersObject = firstLineToHeadersObject(firstLine);
//   const headersArray = firstLineToHeadersArray(firstLine);

//   const csvStringifier = createCsvStringifier({
//     header: headersObject,
//   });

//   const readStream = fs.createReadStream(inputFile);
//   const writeStream = fs.createWriteStream(outputFile);

//   /* ************************************* */
//   class CSVCleaner extends Transform {
//     constructor(options) {
//       super(options);
//     }

//     static formatPossibleString(s = '') {
//       let formatted = s;

//       if (/^[1-9]\d{0,2}(\.\d{3})*(,\d+)?$/.test(formatted) === false) {
//         formatted = `"${formatted.split('\n')[0].replace('"', '')}"`;
//       }

//       return formatted;
//     }

//     _transform(chunkParam, encoding, next) {
//       const chunk = {};
//       headersArray.forEach((colName, index) => {
//         chunk[colName] = chunkParam[index];
//       });

//       for (const key in chunk) {
//         if (key[0] !== '_') {
//           // trims whitespace
//           const trimKey = camelToSnakeCase(key.trim());

//           const formattedKey = trimKey;

//           const formattedValue = CSVCleaner.formatPossibleString(chunk[key]);
//           chunk[formattedKey] = formattedValue;
//           if (key !== formattedKey) {
//             delete chunk[key];
//           }
//         } else {
//           delete chunk[key];
//         }
//       }

//       // filters out all non-number characters
//       if (chunk.default_price !== undefined) {
//         const onlyNumbers = chunk.default_price.replace(/\D/g, '');
//         chunk.default_price = onlyNumbers;
//       }

//       // uses our csvStringifier to turn our chunk into a csv string
//       const output = csvStringifier.stringifyRecords([chunk]);
//       this.push(output);
//       next();
//     }
//   }
//   /* ************************************* */

//   const transformer = new CSVCleaner({ writableObjectMode: true });

//   const onRecord = (record, objParam) => {
//     const { lines: currentLine } = objParam;

//     return record //.slice(headersArray.length);

//     // console.log(objParam, record.length);

//     // if (record.length > headersArray.length) {

//     //   // return record.slice(headersArray.length - 1);
//     // }

//     // return record;
//   };

//   readStream
//     // .pipe(csv({ escape: '\n' }))
//     .pipe(parse({
//       qoute: '"',
//       // delimiter: ',',
//       skip_lines_with_error: true,
//       on_record: onRecord,
//     }))
//     .on('skip', (line) => {
//       if (line.record) {
//         console.log('\n');
//         console.log(`${csvFolder}/${targetFileName}.csv line:${line.records}`);
//         console.log(' skipped -', line.code);
//         console.log(`EXPECTED record to have "${headersArray.length}"
// columns, found "${line.record.length}" instead`);
//         console.log('\n');

//         // Unterminated string combines last to records?
//         const [invalidA, invalidB] = line.record.slice(0,
// headersArray.length)[headersArray.length - 1].split('\n');
//         const fixedARecord
//         console.log(invalidA, invalidB);
//         // readStream.pipe(``)
//       }
//     })
//     // .on('data', (chunk) => {
//     //   console.log(chunk.toString('utf8'));
//     //   return chunk;
//     // })
//     // .on('error', (chunk) => {
//     //   console.log(arguments);
//     //   console.log(chunk.toString('utf8'));
//     //   return chunk;
//     // })
//     .pipe(transformer)
//     .pipe(writeStream)
//     .on('finish', () => {
//       console.log('finished');
//     });
// })();
