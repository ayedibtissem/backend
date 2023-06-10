
const quizz = require('../models/quiz.model');
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await quizz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get quizzes' });
  }
};



exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new quizz(req.body);
    const savedQuiz = await newQuiz.save();
    res.json(savedQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create quiz' });
  }
};

exports.updateQuizById = async (req, res) => {
  try {
    const quiz = await quizz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update quiz' });
  }
};

exports.deleteQuizById = async (req, res) => {
  try {
    const quiz = await quizz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete quiz' });
  }
};