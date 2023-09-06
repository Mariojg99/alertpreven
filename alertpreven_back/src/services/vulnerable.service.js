const { models } = require("../libs/sequelize");

class VulnerableService {
    constructor() {}

    async findVulnerable(id) {
        const res = await models.Vulnerable.findByPk(id);
        if (!res) throw new Error(`Persona vulnerable con id ${id} no encontrada`);
        return res;
    }

    async createVulnerable(data) {
        return models.Vulnerable.create(data);
    }

    async updateVulnerable(data) {
        const res = await models.Vulnerable.update(data);
        return res;
    }
}

module.exports = VulnerableService;