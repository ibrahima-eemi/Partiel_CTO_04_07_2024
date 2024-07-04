import express from 'express';
import Member from '../models/member.js';

const router = express.Router();

// Get all members
router.get('/', async (req, res, next) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    next(err);
  }
});

// Add a new member
router.post('/', async (req, res, next) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    next(err);
  }
});

export default router;
