const sequelizePaginate = require('sequelize-paginate');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbl_products extends Model {
    static associate(models) {}
  }
  tbl_products.init({
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    picture: DataTypes.TEXT,
    expired_at: {
      type: DataTypes.DATEONLY,
      field: 'expiredAt',
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      field: 'isActive',
    },
  }, {
    sequelize,
    modelName: 'tbl_products',
    underscored: true,
    createdAt: false,
    updatedAt: false,
  });
  sequelizePaginate.paginate(tbl_products);
  return tbl_products;
};
