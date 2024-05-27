import imgContact from '../src/assets/main_neon_blue.jpg';
import Form from './Form';
import React, { useEffect } from 'react';


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div>
            <div className='about-text'>
                <h1 className='main-about'>Our Contacts</h1>
                <p className='text-about'>
                Welcome to our contact page! We are always delighted to hear from you and ready to assist you with any inquiries. Feel free to reach out to us using the contact details provided below.
                </p>
            </div>
            <div className="forma-photo">
                <img src={imgContact} className="formaimg" alt="Contact Us" />
                <Form />
            </div>
            <div className="horizontal-bar"></div>
            <div className="map">
                
                <div className='blockContactInfo'>
                    <h3 className='contactInfo'>Working Hours:</h3>
                    <p className='text-about'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <h3 className='contactInfo'>Phone Numbers:</h3>
                    <p className='text-about'>+1-617-646-9037, +1-617-320-1205</p>
                    <h3 className='contactInfo'>Our Email:</h3>
                    <p className='text-about'>shkala1976@gmail.com</p>
                    <p className='text-about'>nastyashkala@gmail.com</p>
                </div>
                <div className='blockContactInfo'>
                    <h3 className='contactInfo'>Our Address:</h3>
                    <p className='text-about'>7171 Beresford St., Burnaby, BC V5E 3Z8</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d2606.120453580019!2d-122.95898532351484!3d49.21724267138305!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d49.217438699999995!2d-122.9564267!4m5!1s0x548677cb6682bccb%3A0x67e4688594df32af!2s7171%20Beresford%20St.%2C%20Burnaby%2C%20BC%20V5E%203Z8!3m2!1d49.2173782!2d-122.95620609999999!5e0!3m2!1sen!2sca!4v1716263716517!5m2!1sen!2sca"
                        width="300"
                        height="300"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;
