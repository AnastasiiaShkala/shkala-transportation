import { Acordion } from "./acordion/Acordion";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function FAQ() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div className="container">
        <div className="main-faq">
            <h1 className="faq">Frequently Asked Questions:</h1>
            <p className="faq-text">Here are some common questions people ask, along with easy-to-understand answers. <br/> They'll give you a better idea of what to expect when you work with SHKALA Transportation Service Inc.</p>
    
        </div>
        <div className="faq-container">
        
            <Acordion/>
        </div>
        <div className="horizontal-bar"></div>
        <div className="main-faq">
        <p className="faq">Still have a question?</p>
        <Link to="/contact" className='questions-btn'>
        Contact Us
       </Link>
        </div>
        
        </div>
    )
}

export default FAQ;