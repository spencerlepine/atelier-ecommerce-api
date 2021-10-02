const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'skus',
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
      size: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'skus',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'skus_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
