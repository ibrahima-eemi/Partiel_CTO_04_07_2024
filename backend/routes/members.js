const express = require('express');
const router = express.Router();
const Member = require('../models/member');

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new member
router.post('/', async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
