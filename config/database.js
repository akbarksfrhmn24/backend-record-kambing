const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ternak', 'root', 'Password1-', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;