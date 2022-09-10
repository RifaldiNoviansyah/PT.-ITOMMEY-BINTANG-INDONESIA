const response = require('@helpers/response');

module.exports = {
  internalServerError: (res, error) => response(res, 500, 'Internal Server Error', error),
  notFound: (res, message) => response(res, 404, message, null),
  hasDeleted: (res, message, data) => response(res, 400, message, data),
  badInput: (res, message, data) => response(res, 400, message, data),
};
