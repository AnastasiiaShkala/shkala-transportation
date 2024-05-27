import dataServices from "../../data/dataServices";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice"

const CartItem = ({cartItem}) => {
    const services = dataServices.find(item => item.id === cartItem.serviceId);
    const dispatch = useDispatch()

    return (
        <div>
            <p className="headerService">{services.name}</p>
            <p className="headerService">{cartItem.quantity}</p>
            <p className="priceService">Price: ${services.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="deleteIcon" src="https://img.icons8.com/nolan/64/delete.png" alt="trash icon"/>
            </span>  
        </div>
    )
}
export default CartItem;