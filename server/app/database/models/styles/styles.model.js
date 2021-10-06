const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'styles',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'product',
          key: 'id',
        },
      },
      results: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'style',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'styles',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'styles_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
