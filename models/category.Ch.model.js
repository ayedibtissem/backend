

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  Correctanswer: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model('Question', quizSchema);

module.exports = Quiz;