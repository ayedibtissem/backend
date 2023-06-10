const Quiz = require('../models/category.Ch.model');
exports.createquiz = async (req, res) => {
  const { category, level, question, options, Correctanswer } = req.body;

  try {
    const newQuiz = new Quiz({
      category,
      level,
      question,
      options,
      Correctanswer,
    });

    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getQuizzes = async (req, res) => {
  const { category, level } = req.query;
  
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
