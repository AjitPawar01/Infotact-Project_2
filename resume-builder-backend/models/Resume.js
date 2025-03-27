const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    education: Array,
    experience: Array,
    skills: Array,
});

module.exports = mongoose.model('Resume', ResumeSchema);