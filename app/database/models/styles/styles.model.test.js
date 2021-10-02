const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const StylesModel = require('./styles.model');

const expectedFields = ['id', 'product_id', 'results'];

describe('Styles Model', () => {
  const Styles = StylesModel(sequelize, dataTypes);
  const styles = new Styles();

  checkModelName(Styles)('styles');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(styles));
  });
});
