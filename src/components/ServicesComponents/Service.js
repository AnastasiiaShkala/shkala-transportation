import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Service = ( {service} ) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return (
        <div>
            <img className="imgServices" src={`./${service.img}.jpeg`} alt="Services"/>
            <h2 className="headerService">{service.name}</h2>
            <p className="priceService">$ {service.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="buttonService" onClick={() => {dispatch(addItemToCart({service, quantity}));
        }}>ADD TO CART</button>
        </div>
    )
}
export default Service;