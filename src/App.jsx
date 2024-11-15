import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddSchool from './components/AddSchool'; // Import the AddSchool component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the /login route */}
        <Route path="/login" element={<Login />} />

        {/* Define the /add_school route */}
        <Route path="/add_school" element={<AddSchool />} />

        {/* Optionally, add a default route */}
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
