const path = require('path');

// npm run sequelize init:migrations

// Set migrations path for Sequelize
// https://github.com/sequelize/cli/issues/28
module.exports = {
  config: path.join(__dirname, 'config.json'),
  'migrations-path': path.join(__dirname, '../app/database/migrations'),
  'seeders-path': path.join(__dirname, '../app/database/seeders'),
  'models-path': path.join(__dirname, '../app/database/models'),
};
