import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function Term() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (

    <div className="privacy">
        <h1 className="header-privacy">Terms of Use:</h1>
        <p className="text-privacy">Welcome to SHKALA Transportation Services Inc.! These Terms of Use outline the rules and regulations for the use of our website.</p>
        <h3 className="subtitle-privacy">1. Acceptance of Terms</h3>
        <p className="text-privacy">
        By accessing this website, you agree to these Terms of Use. If you disagree with any part of these terms, you may not use our website.
        </p>
        <h3 className="subtitle-privacy">2. Intellectual Property Rights</h3>
        <p className="text-privacy">
        All content on this website, including text, images, graphics, and logos, is the property of SHKALA Transportation Services Inc. and protected by intellectual property laws.
        </p>
        <h3 className="subtitle-privacy">3. User Conduct</h3>
        <p className="text-privacy">
        You agree not to engage in any conduct that may disrupt or interfere with the proper functioning of our website or violate any laws or regulations.
        </p>
        <h3 className="subtitle-privacy">4. Disclaimer</h3>
        <p className="text-privacy">
        We make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or reliability of the information provided on our website.
        </p>
        <h3 className="subtitle-privacy">5. Limitation of Liability</h3>
        <p className="text-privacy">
        In no event shall SHKALA Transportation Services Inc. be liable for any damages arising out of or in connection with the use of our website.
        </p>
        <h3 className="subtitle-privacy">6. Changes to Terms</h3>
        <p className="text-privacy">
        We reserve the right to modify these Terms of Use at any time. By continuing to use our website, you agree to be bound by the updated terms.
        </p>
        <h3 className="subtitle-privacy">7. Governing Law</h3>
        <p className="text-privacy">
        These Terms of Use shall be governed by and construed in accordance with the laws of SHKALA Transportation Services Inc., without regard to its conflict of law provisions.
        </p>
            <div className="horizontal-bar"></div>
        <div className="main-faq">
        <p className="text-privacy">
        If you have any questions or concerns about these Terms of Use, please contact us.</p>
        <Link to="/contact" className='questions-btn'>
        Contact Us
       </Link>
        </div>
        
    </div>

    );
}
    export default Term;