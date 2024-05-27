
import imgLine from '../assets/line.jpg';
import Cards from './Cards';

function About() {
        
        return (
                <div className='about-container'>
                    
                    <div className='about-text'>
                        <h1 className='main-about'> About Us</h1>
                        <p className='text-about'>
                        Although at first glance SHKALA Transportation Service Inc. services may seem worlds apart — ranging from transportation to web development — there's a common thread that ties them together: our unwavering commitment to excellence.<br/>
                        On one hand, we specialize in ensuring the safe and timely delivery of goods through our transportation solutions. On the other, we excel in crafting innovative and impactful web experiences through our development expertise. <br/>
                        But beyond our diverse offerings, there's a shared dedication to providing exceptional service and delivering results that exceed expectations. Whether it's navigating the roads or navigating the digital landscape, you can trust us to guide you every step of the way.
                        </p>
                    </div>
                    <img className='about-line' src={imgLine} alt='Line' />
                    <div className='about-text'>
                        <h2 className='main-about'>Our Core Principles:</h2>
                        <p className='text-about'>
                        <span className="highlight">- Innovation:</span> Embracing innovation fuels our quest to conquer challenges and unlock fresh possibilities.<br/>
                        <span className="highlight">- Excellence:</span> Striving for excellence is our standard. We're relentless in our pursuit of delivering superior quality in every aspect of our work.<br/>
                        <span className="highlight">- Integrity:</span> Integrity forms the cornerstone of our operations. We operate with transparency and honesty, cultivating trust among our clients, partners, and colleagues.<br/>
                        <span className="highlight">- Teamwork:</span> Collaboration is the key to our success. We nurture an environment where teamwork thrives, encouraging diverse perspectives and valuing each individual's input.<br/>
                        <span className="highlight">- Client-Centricity:</span> Our clients are central to our mission. We're dedicated to comprehending their needs deeply and surpassing their expectations with tailored solutions.
                        </p>
                    </div>

                    <div className="horizontal-bar"></div>
                    <Cards/>
                </div>
          
    );
}

export default About;