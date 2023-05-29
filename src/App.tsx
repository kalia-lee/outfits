import React from 'react';
import './App.css';
import { Home } from './components/home/Home';
import { HashRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={About} />
          <Route path="/randomizer" Component={Randomizer} />
          <Route path="/closet" Component={Closet} />
        </Routes>
      </div>     
    </HashRouter>
  );
}

const Closet = () => <div>Closet!</div>;
const HomePage = () => <Home></Home>;
const Randomizer = () => <div>Randomizer</div>;
const About = () => <div>About Me</div>
export default App;
