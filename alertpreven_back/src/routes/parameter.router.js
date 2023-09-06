const express = require('express');
const router = express.Router();
const parameterController = require('../controllers/parameters.controller');

router
    .get('/', parameterController.getParameters)
    .post('/', parameterController.addParameter)
    .get('/:id', parameterController.getParametersById)
    .get('/list/:id', parameterController.getParameterList)


module.exports = router;