const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      slogan: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      default_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updatedAt: {
        field: 'updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'product',
      schema: 'public',
      timestamps: true,
      indexes: [
        {
          name: 'product_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
