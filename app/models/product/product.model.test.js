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
  'campus',
  'name',
  'slogan',
  'description',
  'category',
  'default_price',
  'created_at',
  'updated_at',
];

describe('Product Model', () => {
  const Product = ProductModel(sequelize, dataTypes);
  const product = new Product();

  checkModelName(Product)('product');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(product));
  });
});
