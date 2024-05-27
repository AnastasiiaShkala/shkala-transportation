
import img from './assets/logo_1к1.jpeg';
import { Link } from 'react-router-dom';
import Expertise from './Expertise';
import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div>
        <div className="position">
            <div className='welcome-block'> 
                <h1 className='welcome'>Miles of Freight, <br/>
                <br/>Megabytes of Code</h1>
                <Link to="/about" className='home-btn'>
                Who Are We?
               </Link>
            </div>
            
            <img className='home-photo flip' src={img} alt="Main logo"/>
        </div>
        <div className='home-text'>
            <p>Where our truck carry your goods across the continent, our expert developer craft digital solutions to propel your business forward.
                <br/> Experience seamless logistics and innovative web design services all in one place</p>
        </div>
        <div className="horizontal-bar"></div>
        <Expertise/>
        </div>
    );
}

export default Home;