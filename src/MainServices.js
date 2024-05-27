import './App.css';
import Cart from './components/Cart/Cart';
import Services from './components/ServicesComponents/Services';
import AllCategories from './components/Filter/AllCategories';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function MainServices() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
   
  return (
    <div> 
      <div className='upBlock'>
      <h1 className='header'>Our Services</h1>
      <p className='description'>Please note that the list below showcases only a portion of the services we offer. Our company is prepared to provide a wide range of services designed to meet your specific needs and preferences. The prices provided are indicative, but we adhere to a policy of transparent pricing. 
      <br></br>Transportation rates are calculated per mile traveled, ensuring fairness and accuracy in our pricing system. Therefore, we encourage you to reach out to us to discuss your requirements in more detail. Once we have a better understanding of your needs, we can provide you with a detailed price list.</p>
    </div>
    <div className='App'>
      <div className='block'> 
      <AllCategories/>
      <Cart/>
      <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1PK6GnFhN3dG5Pu3TXIoD5QF"
  publishable-key="pk_live_51P6jEkFhN3dG5Pu3jkJ203zVe6JE0ekEziky1pW6OVzdGrCkVBnsvrXxM1THkWVZcTGUkhNJuC5pNFkgU10QRFYE00F5Y8XeD2"
>
</stripe-buy-button>
      </div>
      <div className='block'> 
      <Services/>
      </div>
    </div>
    <div className="horizontal-bar"></div>
        <div className="main-faq">
        <p className="faq">Have a question?</p>
        <Link to="/faq" className='questions-btn'>
        Learn More
       </Link>
        </div>
    </div>
  );
}



export default MainServices;