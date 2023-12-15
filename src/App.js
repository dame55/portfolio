import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from "./pages/Skills";
import React from "react";




export default function App() {
  return (
    <div className="App">
  



<BrowserRouter>

        <Routes>

          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}


