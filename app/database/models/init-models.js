// Run Postgres in terminal ($ psql)
// Initialize the database with `config/init.sql`
// Install `sequelize-auto` https://github.com/sequelize/sequelize-auto
// Run the following command (all one line):
//  $ npx sequelize-auto -h 127.0.0.1 -d postgres -u postgres -x example -p
//        5432  --dialect postgres -c ./config/db.config.js -o ./app/models -t
//        style product styles features skus related photos

const { DataTypes } = require('sequelize');
const featuresModel = require('./features/features.model');
const photosModel = require('./photos/photos.model');
const productModel = require('./product/product.model');
const relatedModel = require('./related/related.model');
const skusModel = require('./skus/skus.model');
const styleModel = require('./style/style.model');

const initModels = (sequelize) => {
  const features = featuresModel(sequelize, DataTypes);
  const photos = photosModel(sequelize, DataTypes);
  const product = productModel(sequelize, DataTypes);
  const related = relatedModel(sequelize, DataTypes);
  const skus = skusModel(sequelize, DataTypes);
  const style = styleModel(sequelize, DataTypes);

  features.belongsTo(product, { as: 'product', foreignKey: 'product_id' });
  product.hasMany(features, { as: 'features', foreignKey: 'product_id' });
  related.belongsTo(product, {
    as: 'productModel',
    foreignKey: 'current_product_id',
  });
  product.hasMany(related, {
    as: 'relateds',
    foreignKey: 'current_product_id',
  });
  product.hasMany(style, {
    as: 'style',
    foreignKey: 'id',
  });
  photos.belongsTo(style, { as: 'style', foreignKey: 'style_id' });
  style.belongsTo(product, { as: 'style', foreignKey: 'product_id' });
  style.hasMany(photos, { as: 'photos', foreignKey: 'style_id' });
  skus.belongsTo(style, { as: 'style', foreignKey: 'id' });
  style.hasMany(skus, { as: 'skus', foreignKey: 'style_id' });

  return {
    features,
    photos,
    product,
    related,
    skus,
    style,
  };
};

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
