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
        allowNull: true,
      },
      'default?': {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('style');
  },
};
