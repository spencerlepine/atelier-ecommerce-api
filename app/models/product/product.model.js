const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    campus: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: 'hr-lax',
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
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
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
