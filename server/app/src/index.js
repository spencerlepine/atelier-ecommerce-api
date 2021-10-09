const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/', routes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports.app = app;
