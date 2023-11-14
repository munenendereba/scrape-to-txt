const Sequelize = require("sequelize");
const configDotenv = require("dotenv").config();

const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpaswword = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT;
const dbhost = process.env.DB_HOST;
const dbport = process.env.DB_PORT;

module.exports = {
  development: {
    username: dbuser,
    password: dbpaswword,
    database: dbname,
    host: dbhost,
    port: dbport,
    dialect: dialect,
  },
};
