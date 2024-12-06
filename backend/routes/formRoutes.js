const express = require('express');
const multer = require('multer');
const Form = require('../models/form');

const router = express.Router();
const upload = multer({ dest: process.env.UPLOADS_DIR }); // Upload directory

// Create a new form
router.post('/create', upload.single('headerImage'), async (req, res) => {
  try {
    const { title, questions } = req.body;
    const newForm = new Form({
      title,
      headerImage: req.file?.path,
      questions: JSON.parse(questions),
    });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get form details
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
