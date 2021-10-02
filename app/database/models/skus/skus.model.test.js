const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const SkusModel = require('./skus.model');

const expectedFields = ['id', 'style_id', 'quantity', 'size'];

describe('Skus Model', () => {
  const Skus = SkusModel(sequelize, dataTypes);
  const skus = new Skus();

  checkModelName(Skus)('skus');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(skus));
  });
});
