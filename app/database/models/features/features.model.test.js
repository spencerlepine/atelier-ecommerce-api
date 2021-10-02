const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const FeaturesModel = require('./features.model');

const expectedFields = ['id', 'product_id', 'feature', 'value'];

describe('Features Model', () => {
  const Features = FeaturesModel(sequelize, dataTypes);
  const features = new Features();

  checkModelName(Features)('features');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(features));
  });
});
