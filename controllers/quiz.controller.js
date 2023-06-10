const Quiz = require('../models/quiz.model');


exports.createQuiz = async (req, res) => {
  try {
    const { title, questions, courseUrl } = req.body;
    const quiz = await Quiz.create({ title, questions, courseUrl });
    res.status(201).json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getAllQuizzes = async (req, res) => {
  try {
   
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
exports.getQuizzesByCategory = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ category: req.params.category });
    res.json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
















