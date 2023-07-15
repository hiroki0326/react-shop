// default
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Services from './Services';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
