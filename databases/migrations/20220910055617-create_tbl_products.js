'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      picture: {
        type: Sequelize.TEXT,
      },
      expiredAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_products');
  },
};
