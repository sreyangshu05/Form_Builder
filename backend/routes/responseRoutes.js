const express = require('express');
const Response = require('../models/response');

const router = express.Router();

// Submit a form response
router.post('/submit', async (req, res) => {
  try {
    const { formId, answers } = req.body;
    const newResponse = new Response({ formId, answers });
    await newResponse.save();
    res.status(201).json(newResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
