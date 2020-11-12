const sequelize = require('sequelize');

const connString = process.env.PG_URL;

const dbConnection = new sequelize.Sequelize(connString, {dialect: 'postgres'});

module.exports = dbConnection;