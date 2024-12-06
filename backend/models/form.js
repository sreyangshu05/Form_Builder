const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Categorize, Cloze, Comprehension
  questionText: { type: String, required: true },
  image: { type: String }, // Path to uploaded image
  options: { type: [String], default: [] }, // For Categorize questions
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: { type: String },
  questions: [questionSchema],
});

module.exports = mongoose.model('Form', formSchema);
