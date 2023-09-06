const { models } = require("../libs/sequelize");

class ParameterService {
    constructor() {}

    async getAllParameters() {
        const res = await models.Parameter.findAll();
        return res;
    }

    async getParameterById(id) {
        const res = await models.Parameter.findByPk(id);
        if (!res) throw new Error("No existe el id " + id);
        return res;
    }

    async createParameter(data) {
        return models.Parameter.create(data);
    }

    async getParameterListWithIdGroup(id) {
        const res = await models.Parameter.findAll({
            where: {
                idGroupParameter: id
            }
        })
        if (res.length == 0) throw new Error("No existe la lista con id " + id);
        return res;
    }
}

module.exports = ParameterService;