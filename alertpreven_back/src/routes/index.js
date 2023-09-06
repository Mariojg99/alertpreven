const express = require('express');
const parameterRouter = require('./parameter.router');
const vulnerableRouter = require('./vulnerable.router');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/alertpreven', router);
    router.use('/parameter', parameterRouter);
    router.use('/vulnerable', vulnerableRouter);
}

module.exports = routerApi;
