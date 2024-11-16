// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Header from "../src/components/Header";
import ModelUpload from "./pages/ModelUpload"
import Login from './pages/Login';


// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header/> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/upload" element={<ModelUpload />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
