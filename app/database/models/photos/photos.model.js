const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'photos',
    {
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
    },
    {
      sequelize,
      tableName: 'photos',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'photos_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
