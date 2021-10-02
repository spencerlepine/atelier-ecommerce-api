'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('features', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'product',
          key: 'id',
        },
      },
      feature: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('features');
  },
};
