const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const RelatedModel = require('./related.model');

const expectedFields = ['id', 'current_product_id', 'related_product_id'];

describe('Related Model', () => {
  const Related = RelatedModel(sequelize, dataTypes);
  const related = new Related();

  checkModelName(Related)('related');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(related));
  });
});
