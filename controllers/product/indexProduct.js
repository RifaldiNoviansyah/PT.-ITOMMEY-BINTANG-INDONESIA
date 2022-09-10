const {tbl_products: productModel} = require('@models');
const response = require('@helpers/response');
const {internalServerError, notFound} = require('@helpers/errorResponse');
module.exports = {
  index: async (req, res) => {
    try {
      const productModelData = await productModel.findAll({
        where: {isActive: true},
        attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
      });
      if (!productModelData) return notFound(res, 'product Not Found');

      return response(res, 200, 'Get Index Product Success', productModelData);
    } catch (error) {
      console.log(error);
      return internalServerError(res, error.message);
    }
  },
};
