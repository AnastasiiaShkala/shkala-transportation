import './App.css';
import {
    Link
  } from "react-router-dom";
import img from './assets/internet.png';

function Navbar() {

    return (
<nav className='navbar'>
  <div className="logo">
  <img className='shkala-logo' src={img} width='50px' alt="Logo"/>
    <div>
    <span className='shkala'>SHKALA Transportation Service Inc.</span>
    </div>
    
  </div>

  <div className="menu">
    <Link to="/home" className='link menu-link'>Home</Link>
    <Link to="/about" className='link menu-link'>About</Link>
    <Link to="/services" className='link menu-link'>Services</Link>
    <Link to="/faq" className='link menu-link'>FAQ</Link>
    <Link to="/contact" className='link menu-link'>Contact</Link>
  </div>
</nav>
    );
}
export default Navbar;
