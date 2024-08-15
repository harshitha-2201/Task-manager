import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import './App.css';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
