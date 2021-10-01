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
const stylesModel = require('./styles/styles.model');

const initModels = (sequelize) => {
	const features = featuresModel(sequelize, DataTypes);
	const photos = photosModel(sequelize, DataTypes);
	const product = productModel(sequelize, DataTypes);
	const related = relatedModel(sequelize, DataTypes);
	const skus = skusModel(sequelize, DataTypes);
	const style = styleModel(sequelize, DataTypes);
	const styles = stylesModel(sequelize, DataTypes);

	features.belongsTo(product, { as: 'product', foreignKey: 'product_id' });
	product.hasMany(features, { as: 'features', foreignKey: 'product_id' });
	related.belongsTo(product, {
		as: 'currentproductModel',
		foreignKey: 'currentproductModel_id',
	});
	product.hasMany(related, {
		as: 'relateds',
		foreignKey: 'currentproductModel_id',
	});
	styles.belongsTo(product, { as: 'product', foreignKey: 'product_id' });
	product.hasMany(styles, { as: 'styles', foreignKey: 'product_id' });
	photos.belongsTo(style, { as: 'style', foreignKey: 'style_id' });
	style.hasMany(photos, { as: 'photos', foreignKey: 'style_id' });
	skus.belongsTo(style, { as: 'style', foreignKey: 'style_id' });
	style.hasMany(skus, { as: 'skus', foreignKey: 'style_id' });
	styles.belongsTo(style, { as: 'resultsstyleModel', foreignKey: 'results' });
	style.hasMany(styles, { as: 'styles', foreignKey: 'results' });

	return {
		features,
		photos,
		product,
		related,
		skus,
		style,
		styles,
	};
};

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
