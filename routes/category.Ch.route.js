
const express = require('express');
const quizController = require('../controllers/category.Ch.controller');

const router = express.Router();
router.post('/a', quizController.createquiz);

router.get('/a', quizController.getQuizzes);

module.exports = router;
