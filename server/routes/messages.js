const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages for a project
router.get('/project/:projectId', async (req, res) => {
  try {
    const messages = await Message.find({ projectId: req.params.projectId })
      .sort({ position: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE new message
router.post('/', async (req, res) => {
  try {
    const message = new Message(req.body);
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;