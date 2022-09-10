
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tbl_products', [
      {
        name: 'Test Product 1',
        qty: 100,
        picture: null,
        expiredAt: new Date(),
        isActive: true,
      },
      {
        name: 'Test Product 2',
        qty: 100,
        picture: null,
        expiredAt: new Date(),
        isActive: true,
      },
      {
        name: 'Test Product 3',
        qty: 100,
        picture: null,
        expiredAt: new Date(),
        isActive: true,
      },
      {
        name: 'Test Product 4',
        qty: 100,
        picture: null,
        expiredAt: new Date(),
        isActive: true,
      },
      {
        name: 'Test Product 5',
        qty: 100,
        picture: null,
        expiredAt: new Date(),
        isActive: true,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tbl_products', null, {});
  },
};
