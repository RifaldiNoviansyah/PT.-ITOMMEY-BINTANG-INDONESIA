const {tbl_products: productModel} = require('@models');
const response = require('@helpers/response');
const {internalServerError} = require('@helpers/errorResponse');
const validateInputBody = require('@helpers/validateInputBody');

module.exports = {
  create: async (req, res) => {
    try {
      const {name, qty, expiredAt} = req.body;
      const dataError = await validateInputBody.validateInputBody(res, name, qty, expiredAt);
      if (!dataError) {
        const productModelData = await productModel.create({
          name: name,
          qty: qty,
          expired_at: expiredAt,
          is_active: true,
        });

        const result = {
          id: productModelData.id,
          name: productModelData.name,
          qty: productModelData.qty,
          picture: null,
          expiredAt: productModelData.expired_at,
          isActive: productModelData.is_active,
        };

        return response(res, 200, 'Create Product Success', result);
      }
    } catch (error) {
      console.log(error);
      return internalServerError(res, error.message);
    }
  },
};
