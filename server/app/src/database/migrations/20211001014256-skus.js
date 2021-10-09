'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('skus', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      style_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'style',
          key: 'id',
        },
      },
      size: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('skus');
  },
};
