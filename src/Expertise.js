import React, { useState, useEffect } from 'react';
import { dataAbout } from './about/dataAbout';
import { Link } from 'react-router-dom';

function Expertise() {

    const [person, setPerson] = useState(0);
    const { name, description, image } = dataAbout[person];

    useEffect(() => {
        
    }, []);

    const previousPerson = () => {
        setPerson((person) => {
            person--;
            if (person < 0) {
                return dataAbout.length - 1;
            }
            return person;
        });
    };

    const nextPerson = () => {
        setPerson((person) => {
            person++;
            if (person > dataAbout.length - 1) {
                person = 0;
            }
            return person;
        });
    };
    return (
<div className='about-gallery'>
                         <h2 className='main-about'>Our Areas of Expertise:</h2>
                    <div className='btn-about'> 
                         <button onClick={previousPerson} className='btn-previous'>
                            Previous
                        </button>
                        <button onClick={nextPerson} className='btn-next'>
                            Next
                        </button>
                    </div>  
                    <div className='block-expertise'> 
                    <div className='expertise'>
                        
                        <img className='about-img' src={image} alt='Areas' />
                    </div>
                    <div className='expertise'>
                    <h2 className='about-name'> {name}</h2>
                        <p className='about-description'>{description}</p>
                    </div>
                    </div> 
                    <Link to="/services" className='questions-btn'>
                    View Offerings
                    </Link>    
                    </div>
    );
}
export default Expertise;          