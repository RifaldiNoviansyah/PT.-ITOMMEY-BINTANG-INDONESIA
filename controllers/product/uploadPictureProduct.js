const {tbl_products: productModel} = require('@models');
const response = require('@helpers/response');
const {internalServerError, notFound} = require('@helpers/errorResponse');
module.exports = {
  upload: async (req, res) => {
    try {
      const productModelData = await productModel.findOne({
        where: {id: req.id, is_active: true},
      });
      if (!productModelData) return notFound(res, 'product Not Found');

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
