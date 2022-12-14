const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('@config/config.json')[env];

const databases = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      databases[model.name] = model;
    });

Object.keys(databases).forEach((modelName) => {
  if (databases[modelName].associate) {
    databases[modelName].associate(databases);
  }
});

databases.sequelize = sequelize;
databases.Sequelize = Sequelize;

module.exports = databases;
