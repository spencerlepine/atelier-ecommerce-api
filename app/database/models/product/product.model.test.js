const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const ProductModel = require('./product.model');

const expectedFields = [
  'id',
  'name',
  'slogan',
  'description',
  'category',
  'default_price',
];

describe('Product Model', () => {
  const Product = ProductModel(sequelize, dataTypes);
  const product = new Product();

  checkModelName(Product)('product');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(product));
  });
});
