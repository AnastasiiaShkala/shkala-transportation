import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (

    <div className="privacy">
        <h1 className="header-privacy">Privacy Policy:</h1>
<p className="text-privacy">At SHKALA Transportation Services Inc., we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect and how we use it.</p>
    <h3 className="subtitle-privacy">Information We Collect:</h3>

        <ul> 
        <li>Personal Information: When you interact with our website, we may collect personal information such as your name, email address, and contact details. This information is collected only with your consent and is used solely for the purpose of providing you with the services you requested.</li>
        <li>Usage Data: We may also collect usage data, such as your IP address, browser type, pages visited, and time spent on our website. This data helps us analyze and improve our website's performance and user experience.</li>
        </ul>
    
    <h3 className="subtitle-privacy">How We Use Your Information:</h3>
    <ul> 
        <li>We use the information we collect to personalize your experience on our website and to provide you with the services you requested.</li>
    <li>We may also use your information to communicate with you about updates, promotions, and other relevant information related to our services, but only if you have opted in to receive such communications.</li>
    </ul> 
    <h3 className="subtitle-privacy">Data Security:</h3>
    <ul>
        <li>We are committed to protecting your personal information and have implemented security measures to safeguard it from unauthorized access, disclosure, alteration, or destruction.</li>
    </ul>
    <h3 className="subtitle-privacy">Third-Party Links:</h3>
    <ul>
        <li>Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices of these websites or services. We encourage you to review the privacy policies of any third-party websites or services you visit.</li>
    </ul>
    <h3 className="subtitle-privacy">Changes to This Privacy Policy:</h3>
    <ul>
        <li>
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated Privacy Policy on our website.
        </li>
    </ul>
    <div className="horizontal-bar"></div>
    <div className="main-faq">
    <p className="text-privacy">
    By using our website, you consent to the terms of this Privacy Policy.
    </p>
    <p className="text-privacy">
    If you have any questions or concerns about our Privacy Policy, please contact us.
    </p>
    <Link to="/contact" className='questions-btn'>
        Contact Us
       </Link>
    </div>
    </div>
    );
}
export default Privacy;