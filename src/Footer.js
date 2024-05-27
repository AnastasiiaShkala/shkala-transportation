import React from 'react';
import { Link } from 'react-router-dom';
import LinkedinIcon from './assets/linkedin.png';
import EmailIcon from './assets/email.png';
import PhoneIcon from './assets/phone.png';



function Footer() {
  return (
    <footer className='footer'>
          
      <div className='copyright'>
         <a className='copyright' href='https://portfolio-anastasiia-shkala.glitch.me/'>
         <p > Design by Anastasiia Shkala</p>
         </a>
         <p className='copyright'>&copy; 2024 SHKALA Transportation Services Inc. All rights reserved.</p>
      </div>

      <div className='copyright'>
        <div>
        <a href='https://www.linkedin.com/company/shkala-transportation-service-inc/'>
            <img src={LinkedinIcon} alt='Linkedin' className='footer-content'/>
        </a>
        
        <a href='mailto:shkala1976@gmal.com'>
            <img src={EmailIcon} alt='Email' className='footer-content' />
        </a>
        <a href='tel:+16173201205'>
            <img src={PhoneIcon} alt='Phone'  className='footer-content' />
        </a>
        <div className='copyright'> 
        <Link to="/home" className='term' >Home</Link>
        </div>
        </div>
      </div>

      <div className='copyright'>  
        <Link to="/term" className='term ' >Term Of Use</Link>
        
        <Link to="/privacy" className='term ' >Privacy Policy</Link>
      </div>
               
    </footer>
  );
}

export default Footer;