
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Contact from './components/Contact';


import './style.css'; 


const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (userData) => {
    setUserData(userData);
    
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </Router>
  );
};

export default App;

