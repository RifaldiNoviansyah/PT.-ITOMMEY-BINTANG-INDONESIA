const {tbl_products: productModel} = require('@models');
const {notFound} = require('@helpers/errorResponse');

module.exports = {
  queryGetProductData: async (req, res, next) => {
    try {
      const {id} = req.params;
      const productModelData = await productModel.findOne({
        where: {id, is_active: true},
        attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
      });
      if (!productModelData) return notFound(res, 'product Not Found');
      req.productModelData = productModelData;

      next();
    } catch (error) {
      console.log('##Error roleUserFeature function', error);
    }
  },
};
