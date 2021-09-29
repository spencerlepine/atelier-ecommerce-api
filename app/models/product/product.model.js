const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    slogan: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(325),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    default_price: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'product_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);
