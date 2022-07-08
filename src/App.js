import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Me from './pages/Me'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  );
}

function Blog() {
  window.location.href = 'https://fossian.com';
  return null;
}

export default App;
