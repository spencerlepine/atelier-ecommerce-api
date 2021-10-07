'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('style', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      original_price: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      sale_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      'default?': {
        type: Sequelize.BLOB,
        allowNull: false,
        defaultValue: '\\x74727565',
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('style');
  },
};
