// src/components/CreateResume.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateResume = () => {
    const [resume, setResume] = useState({
        name: '',
        email: '',
        phone: '',
        education: [''],
        experience: [''],
        skills: [''],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResume((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleArrayChange = (e, index, type) => {
        const { value } = e.target;
        const updatedArray = [...resume[type]];
        updatedArray[index] = value;
        setResume((prev) => ({
            ...prev,
            [type]: updatedArray,
        }));
    };

    const addField = (type) => {
        setResume((prev) => ({
            ...prev,
            [type]: [...prev[type], ''],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/resumes', resume);
            alert('Resume created successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            
            <h4>Education</h4>
            {resume.education.map((edu, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder="Education"
                    value={edu}
                    onChange={(e) => handleArrayChange(e, index, 'education')}
                />
            ))}
            <button type="button" onClick={() => addField('education')}>Add Education</button>

            <h4>Experience</h4>
            {resume.experience.map((exp, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder="Experience"
                    value={exp}
                    onChange={(e) => handleArrayChange(e, index, 'experience')}
                />
            ))}
            <button type="button" onClick={() => addField('experience')}>Add Experience</button>

            <h4>Skills</h4>
            {resume.skills.map((skill, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder="Skill"
                    value={skill}
                    onChange={(e) => handleArrayChange(e, index, 'skills')}
                />
            ))}
            <button type="button" onClick={() => addField('skills')}>Add Skill</button>

            <button type="submit">Create Resume</button>
        </form>
    );
};

export default CreateResume;