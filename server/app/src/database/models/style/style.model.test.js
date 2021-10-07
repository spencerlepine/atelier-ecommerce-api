const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const StyleModel = require('./style.model');

const expectedFields = [
  'id',
  'name',
  'original_price',
  'sale_price',
  'default?',
  'product_id',
];

describe('Style Model', () => {
  const Style = StyleModel(sequelize, dataTypes);
  const style = new Style();

  checkModelName(Style)('style');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(style));
  });
});
