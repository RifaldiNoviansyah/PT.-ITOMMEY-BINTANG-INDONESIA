/* eslint-disable require-jsdoc */
const response = require('@helpers/response');
module.exports = {
  validateInputBody: async (res, name, qty, expiredAt) => {
    if (name.length === 0) return response(res, 422, 'name cant be empty');
    if (Number.isInteger(qty) === false) return response(res, 422, 'qty must be number');

    function dateIsValid(expiredAt) {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      if (expiredAt.match(regex) === null) return false;
      const date = new Date(expiredAt);
      const timestamp = date.getTime();
      if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) return false;
      return date.toISOString().startsWith(expiredAt);
    }
    if (dateIsValid(expiredAt) === false) return response(res, 422, 'expiredAt must be formatted yyyy-mm-dd');
  },
};
