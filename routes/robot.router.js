
const express = require('express');
const router = express.Router();
const robotController = require('../controllers/robot.controller');


router.post('/generate', robotController.generateNumberAndCheckAnswer);

module.exports = router;


