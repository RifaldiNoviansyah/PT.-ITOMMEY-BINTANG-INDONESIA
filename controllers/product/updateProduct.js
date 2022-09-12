const response = require('@helpers/response');
const {internalServerError} = require('@helpers/errorResponse');
const validateInputBody = require('@helpers/validateInputBody');

module.exports = {
  update: async (req, res) => {
    try {
      const {name, qty, expiredAt} = req.body;
      const productModelData = req.productModelData;
      const dataError = await validateInputBody.validateInputBody(res, name, qty, expiredAt);
      if (!dataError) {
        productModelData.name = name;
        productModelData.qty = qty;
        productModelData.expired_at = expiredAt;
        await productModelData.save();

        const result = {
          id: productModelData.id,
          name: productModelData.name,
          qty: productModelData.qty,
          picture: null,
          expiredAt: productModelData.expired_at,
          isActive: productModelData.is_active,
        };

        return response(res, 200, 'Updated Product Success', result);
      }
    } catch (error) {
      console.log(error);
      return internalServerError(res, error.message);
    }
  },
};
