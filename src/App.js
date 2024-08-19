import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/about/About";
import MainServices from "./pages/services/MainServices";
import FAQ from "./entities/acordion/FAQ";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Footer from './entities/Footer';
import './app/global-styles/App.css';
import Privacy from './pages/privacy/Privacy';
import Navbar from './entities/Navbar';
import Term from './pages/term/Term';
import Scroll from './shared/components/Scroll'


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
