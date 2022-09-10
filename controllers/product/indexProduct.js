const response = require('@helpers/response');
const {internalServerError} = require('@helpers/errorResponse');
module.exports = {
  index: async (req, res) => {
    try {
      const {page} = req.query;
      const currentPage = +page || 1;
      const result = {};

      const productModelData = req.docs.map((data) => ({
        id: data.id,
        name: data.name,
        qty: data.qty,
        picture: data.picture !== null ? `/picture/product/img-product-${data.id}.png` : null,
        expiredAt: data.expired_at,
        isActive: data.is_active,
      }));

      result.totalData = req.total;
      result.totalPages = req.pages;
      result.dataPerPage = req.size;
      result.currentPage = currentPage;
      result.productData = productModelData;
      return response(res, 200, 'Get Index Product Success', result);
    } catch (error) {
      console.log(error);
      return internalServerError(res, error.message);
    }
  },
};
