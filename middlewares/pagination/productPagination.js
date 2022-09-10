const {tbl_products: productModel} = require('@models');
const {internalServerError} = require('@helpers/errorResponse');
const response = require('@helpers/response');

module.exports = {
  productPagination: async (req, res, next) => {
    try {
      const {sortBy, sort} = req.query;
      let {page, size} = req.query;
      let options = {};
      let sortAscDesc = '';
      page = +page || 1;
      size = +size || 5;

      if (sort !== 'ASC' && sort !== 'DESC') return response(res, 422, 'sort only ASC or DESC');
      sort.toUpperCase() === 'ASC' ? sortAscDesc = 'ASC' : sortAscDesc = 'DESC';

      switch (sortBy) {
        case '':
          options = {
            where: {is_active: true},
            attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
            page: +page,
            paginate: +size,
            order: [['name', sortAscDesc]],
          };
          break;
        case 'name':
          options = {
            where: {is_active: true},
            attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
            page: +page,
            paginate: +size,
            order: [['name', sortAscDesc]],
          };
        case 'qty':
          options = {
            where: {is_active: true},
            attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
            page: +page,
            paginate: +size,
            order: [['qty', sortAscDesc]],
          };
        case 'expiredAt':
          options = {
            where: {is_active: true},
            attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
            page: +page,
            paginate: +size,
            order: [['expired_at', sortAscDesc]],
          };
          break;
        case 'id':
          options = {
            where: {is_active: true},
            attributtes: ['id', 'name', 'qty', 'picture', 'expired_at', 'is_active'],
            page: +page,
            paginate: +size,
            order: [['id', sortAscDesc]],
          };
          break;
        default:
          return response(res, 404, 'sorting can only be based on name, qty, expiredAt, id', []);
      }

      const {
        docs,
        pages,
        total,
      } = await productModel.paginate(options);
      if (docs.length === 0) {
        return response(res, 200, 'Get Index Product Success', []);
      }
      req.docs = docs;
      req.pages = pages;
      req.total = total;
      req.size = options.paginate;
      next();
    } catch (error) {
      console.log(error);
      internalServerError(res, error.message);
    }
  },
};

