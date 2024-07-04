import express from 'express';
import Event from '../models/event.js';

const router = express.Router();

// Get all events
router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    next(err);
  }
});

// Add a new event
router.post('/', async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    next(err);
  }
});

export default router;
