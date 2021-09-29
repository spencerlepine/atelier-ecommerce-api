# Using CSV Data

## Directory structure:

|- data/
|- csvFiles/
|- csvFilesClean/
|- helpers/

## Clean CSV files

Dump CSV files into the `csvFiles/` directory.

Run the following command to CLEAN the file:
`TARGET_FILE=product npm run csv:clean`

- Input `<rootDir>/data/csvFiles/product.csv`
- Output `<rootDir>/data/csvFilesClean/product.csv`

## Load the CSV Files

Use cleaned CSV files in `csvFilesClean/`. Load them into Postgres

Run the following command to LOAD the file:
`TARGET_FILE=product npm run csv:load`

- Input `<rootDir>/data/csvFilesClean/product.csv`

## Example Commands

### Clean each CSV file

TARGET_FILE=skus npm run csv:clean
TARGET_FILE=product npm run csv:clean
TARGET_FILE=features npm run csv:clean
TARGET_FILE=style npm run csv:clean
TARGET_FILE=photos npm run csv:clean
TARGET_FILE=related npm run csv:clean

### Clean each CSV file

TARGET_FILE=skus npm run csv:load
TARGET_FILE=product npm run csv:load
TARGET_FILE=features npm run csv:load
TARGET_FILE=style npm run csv:load
TARGET_FILE=photos npm run csv:load
TARGET_FILE=related npm run csv:load
