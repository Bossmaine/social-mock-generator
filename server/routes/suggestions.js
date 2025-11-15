const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');

// GET all suggestions
router.get('/', async (req, res) => {
  try {
    const suggestions = await Suggestion.find().populate('userId');
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE new suggestion
router.post('/', async (req, res) => {
  try {
    const suggestion = new Suggestion(req.body);
    const savedSuggestion = await suggestion.save();
    res.status(201).json(savedSuggestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;