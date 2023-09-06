const express = require('express');
const router = express.Router();
const vulnerableController = require('../controllers/vulnerable.controller');

router
    .get('/:id', vulnerableController.getVulnerable)
    .post('/', vulnerableController.addVulnerable)
    .put('/', vulnerableController.updateVulnerable)

module.exports = router;