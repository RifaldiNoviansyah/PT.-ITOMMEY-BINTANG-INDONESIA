const response = require('@helpers/response');
const {internalServerError} = require('@helpers/errorResponse');

module.exports = {
  deleted: async (req, res) => {
    try {
      const productModelData = req.productModelData;
      productModelData.is_active = false;
      await productModelData.save();

      const result = {
        id: productModelData.id,
        name: productModelData.name,
        qty: productModelData.qty,
        picture: null,
        expiredAt: productModelData.expired_at,
        isActive: productModelData.is_active,
      };

      return response(res, 200, 'Deleted Product Success', result);
    } catch (error) {
      console.log(error);
      return internalServerError(res, error.message);
    }
  },
};
