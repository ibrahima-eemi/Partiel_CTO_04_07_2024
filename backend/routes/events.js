const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new event
router.post('/', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
