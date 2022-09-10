/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbl_products extends Model {
    static associate(models) {}
  }
  tbl_products.init({
    id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    qty: DataTypes.INT,
    picture: DataTypes.TEXT,
    expiredAt: DataTypes.DATEONLY,
    isActive: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'tbl_products',
    underscored: true,
  });
  return tbl_products;
};
