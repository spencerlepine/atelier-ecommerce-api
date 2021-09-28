const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'style',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    original_price: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    sale_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'default?': {
      type: DataTypes.BLOB,
      allowNull: false,
      defaultValue: '\\x74727565',
    },
    style_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'style',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'style_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);
