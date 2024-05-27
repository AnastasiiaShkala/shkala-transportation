import clientImage from '../assets/icons-sweat.png';
import priceImage from '../assets/icons-price.png';
import timeImage from '../assets/icons-clock.png';

function Cards() {

    return (
        <div> 
    <div className='about-text'> 
                    <h2 className='main-about'>Why Choose Us?</h2>
                    </div>
                    <div className='card-container'> 
                    <div className="card">
                    <img className='card-logo' src={clientImage} alt="Logo clients"/>
                        <p className="heading">
                        Satisfied customers
                             </p>
                    </div>
                    <div className="card">
                    <img className='card-logo' src={priceImage} alt="Logo price"/>
                        <p className="heading">
                        Affordable prices
                             </p>
                    </div>
                    <div className="card">
                    <img className='card-logo' src={timeImage} alt="Logo time"/>
                        <p className="heading">
                        Years of experience
                             </p>
                    </div>
                    </div>
                    </div>
    );
}
export default Cards;