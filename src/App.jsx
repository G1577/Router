import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Food from './Food';
import Cocktails from './Cocktails';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Food />} />
          <Route path="/cocktails" element={<Cocktails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
