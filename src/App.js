import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./about/About";
import MainServices from "./MainServices";
import FAQ from "./FAQ";
import Home from "./Home";
import Contact from "./Contact";
import Footer from './Footer';
import './App.css';
import Privacy from './Privacy';
import Navbar from './Navbar';
import Term from './Term';
import Scroll from './Scroll'


function App() {
  
  return (<div>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<MainServices/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/term" element={<Term/>} />
  </Routes>
  <Scroll/>
  <Footer/>
  
    </Router>
    </div>
  );
}

export default App;
