'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('related', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      current_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'product',
          key: 'id',
        },
      },
      related_product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('related');
  },
};
