import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

export function Cart(){
  const cartItems = useSelector(state => state.cart.cartItems)

  if(cartItems.length == 0) return <p>"your cart is empty"</p>
  return (
    <>
    {cartItems.length > 0 && <ul>
      {cartItems.map((item)=>{
        return <li key={item.id}>Name: {item.title} Price: {item.price} Quantity: {item.quantity}</li>
      })}
      
      </ul>}
    </>
  )
}