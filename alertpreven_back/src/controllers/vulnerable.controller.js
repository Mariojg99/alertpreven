const VulnerableService = require('../services/vulnerable.service');

const service = new VulnerableService();

const getVulnerable = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.findVulnerable(id);
        res.json(response);
    } catch (error) {
        res.status(500).send(
            {
                success: false,
                message: error.message
            }
        );
    }
}

const addVulnerable = async (req, res) => {
    try {
        const response = await service.createVulnerable(req.body);
        res.json({
            success: true,
            data: response
        })
    } catch (error) {
        res.status(500).send(
            {
                success: false,
                message: error.message
            }
        );
    }
}

const updateVulnerable = async (req, res) => {
    try {
        const response = await service.updateVulnerable(req.body);
        res.json({
            success: true,
            data: response
        })
    } catch (error) {
        res.status(500).send(
            {
                success: false,
                message: error.message
            }
        );
    }
}

module.exports = {
    getVulnerable,
    addVulnerable,
    updateVulnerable
}