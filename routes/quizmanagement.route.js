const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizmanagement.controller');
router.get('/quizz', quizzController.getAllQuizzes);
router.post('/quizz', quizzController.createQuiz);

router.put('/:id', quizzController.updateQuizById);
router.delete('/:id', quizzController.deleteQuizById);
module.exports = router;