import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Food from './Food';
import Cocktails from './Cocktails';

const App = () => {
  return (
    <div style={{ paddingTop: '200px' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Food />} />
        <Route path="/cocktails" element={<Cocktails />} />
      </Routes>
    </div>
  );
};

export default App;
