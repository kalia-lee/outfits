import React from 'react';
import './App.css';
import { Home } from './components/home/Home';
import { Randomizer } from './components/randomizer/Randomizer';
import { About } from './components/about/About';
import { Closet } from './components/closet/Closet';
import { HashRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/randomizer" element={<Randomizer />} />
          <Route path="/closet" element={<Closet />} />
        </Routes>
      </div>     
    </HashRouter>
  );
}

export default App;
