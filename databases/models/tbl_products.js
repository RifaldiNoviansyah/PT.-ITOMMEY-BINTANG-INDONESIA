/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbl_products extends Model {
    static associate(models) {}
  }
  tbl_products.init({
    uuid: DataTypes.STRING,
    name: DataTypes.STRING,
    del_status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'tbl_products',
    underscored: true,
  });
  return tbl_products;
};
