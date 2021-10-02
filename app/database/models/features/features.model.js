const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'features',
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
      feature: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'features',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'features_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
