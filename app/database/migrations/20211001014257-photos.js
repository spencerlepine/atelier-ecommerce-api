'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('photos', {
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
      thumbnail_url: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(250),
        allowNull: true,
        defaultValue: 'NULL',
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('photos');
  },
};
