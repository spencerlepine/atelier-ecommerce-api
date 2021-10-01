const { sequelize } = require('../database/models');
const server = require('../index');

// Close the entire Sequalize Connection after ALL tests
// https://stackoverflow.com/questions/60217417/jest-tests-hang-due-to-open-sequelize-connections/60267873#60267873
afterAll(() => {
  sequelize.close();
  server.close();
});
