const { Sequelize } = require("sequelize");
const setupModel = require("../db");
const { config } = require("./../config/config");

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: "postgres",
    }
);

sequelize.sync();
setupModel(sequelize);

module.exports = sequelize;