import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Resume Builder</h2>
            <p>Click the button below to create your resume.</p>
            <a href="/create" className="btn btn-primary">Create Resume</a>
        </div>
    );
};

export default Home;