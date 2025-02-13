import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navbar';


import './App.css';



function App() {


  return (
    <div className="App">
      {/* particles.js */}

      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />



      </Routes>
    </div>
  );
}

export default App;
