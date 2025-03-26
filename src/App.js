import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import QRCodeScanner from './components/QRCode';
import FacialRecognition from './components/facialrecognition';
import './styles.css';
function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/" 
          element={<Login backgroundImage="/bg.png" />} 
        />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<QRCodeScanner />} />
        <Route path="/face" element={<FacialRecognition />} />
      </Routes>
    </Router>
  );
}

export default App;

