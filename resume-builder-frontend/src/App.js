import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateResume from './components/CreateResume';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1>Resume Builder</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateResume />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;