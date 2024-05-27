import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)

    return (
        <div>
           <img className="cartIcon" src="https://img.icons8.com/nolan/64/shopping-cart.png" alt="shopping-cart"/>
        <h3 className="totalService">TOTAL: ${totalPrice}</h3>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
        
        </div>
    )
}
export default Cart;