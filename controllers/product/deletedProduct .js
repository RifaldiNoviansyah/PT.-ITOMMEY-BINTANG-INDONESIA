const {tbl_products: productModel} = require('@models');
const response = require('@helpers/response');
const {internalServerError, notFound} = require('@helpers/errorResponse');
module.exports = {
  deleted: async (req, res) => {
    try {
      const {id} = req.params;
      const productModelData = await productModel.findOne({
        where: {id, is_active: true},
        attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
      });
      if (!productModelData) return notFound(res, 'product Not Found');

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
