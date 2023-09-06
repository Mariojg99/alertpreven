const { Sequelize } = require('sequelize');
const { Parameter, ParameterSchema } = require('./models/parameter.model');
const { Vulnerable, VulnerableSchema } = require('./models/vulnerable.model');

const setupModel = (Sequelize) => {
    Parameter.init(ParameterSchema, Parameter.config(Sequelize));
    Vulnerable.init(VulnerableSchema, Vulnerable.config(Sequelize));
}

module.exports = setupModel;