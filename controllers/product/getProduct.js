const response = require('@helpers/response');
const {internalServerError} = require('@helpers/errorResponse');
module.exports = {
  get: async (req, res) => {
    try {
      const productModelData = req.productModelData;
      const result = {
        id: productModelData.id,
        name: productModelData.name,
        qty: productModelData.qty,
        picture: productModelData.picture !== null ? `/picture/product/img-product-${productModelData.id}.png` : null,
        expiredAt: productModelData.expired_at,
        isActive: productModelData.is_active,
      };

      return response(res, 200, 'Get Detail Product Success', result);
    } catch (error) {
      console.log(error);
      return internalServerError(res, error.message);
    }
  },
};
