const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  answers: { type: Array, required: true }, // Array of answers to the form questions
});

module.exports = mongoose.model('Response', responseSchema);
