const response = require('@helpers/response');
const {internalServerError} = require('@helpers/errorResponse');
module.exports = {
  upload: async (req, res) => {
    try {
      const productModelData = req.productModelData;
      productModelData.picture = req.fileNameProduct;
      await productModelData.save();

      const result = {
        id: productModelData.id,
        name: productModelData.name,
        qty: productModelData.qty,
        picture: productModelData.picture,
        expiredAt: productModelData.expired_at,
        isActive: productModelData.is_active,
      };

      return response(res, 200, 'Updated Product Success', result);
    } catch (error) {
      console.log(error);
      return internalServerError(res, error.message);
    }
  },
};
