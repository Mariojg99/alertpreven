const ParameterService = require('../services/parameter.service');

const service = new ParameterService();

const getParameters = async (req, res) => {
    try {
        const response = await service.getAllParameters();
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

const getParametersById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.getParameterById(id);
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

const addParameter = async (req, res) => {
    try {
        const response = await service.createParameter(req.body);
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

const getParameterList = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.getParameterListWithIdGroup(id);
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

module.exports = {
    getParameters,
    getParametersById,
    addParameter,
    getParameterList
}