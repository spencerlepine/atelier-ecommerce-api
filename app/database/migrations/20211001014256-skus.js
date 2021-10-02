'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('skus', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      style_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'style',
          key: 'id',
        },
      },
      size: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('skus');
  },
};
