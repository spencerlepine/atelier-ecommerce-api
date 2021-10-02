'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('photos', {
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
      thumbnail_url: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(250),
        allowNull: true,
        defaultValue: 'NULL',
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('photos');
  },
};
