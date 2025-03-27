const express = require('express');
const Resume = require('../models/Resume');
const router = express.Router();

// Create a new resume
router.post('/', async (req, res) => {
    const newResume = new Resume(req.body);
    try {
        const savedResume = await newResume.save();
        res.status(201).json(savedResume);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all resumes
router.get('/', async (req, res) => {
    try {
        const resumes = await Resume.find();
        res.status(200).json(resumes);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;