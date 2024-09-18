import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Adjust import paths based on your project structure
import Login from './routes/Login'; // Adjust import paths
import Signup from './routes/SignUp';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </Router>
    );
};

export default App;
