const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan'); // DELETE THIS
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

// Parse request body
app.use(bodyParser.json());

// app.use(logger('dev')); // DELETE THIS
// Delete this - Loader io verification
app.use('/loaderio-1779f806e437a4181f7af6d9d84a5ecf', (req, res) => res
  .status(200)
  .sendFile(
    path.join(__dirname, 'loaderio-1779f806e437a4181f7af6d9d84a5ecf.txt'),
  ));

app.use('/', routes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports.app = app;
