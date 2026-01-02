import { useSelector, useDispatch } from "react-redux";
import {removeItem, increase, decrease  } from "./cartSlice";

export function Cart(){
  const cartItems = useSelector(state => state.cart.cartItems)

  const dispatch = useDispatch()

  if(cartItems.length == 0) return <p>"your cart is empty"</p>
  return (
    <>
    {cartItems.length > 0 && <ul>
      {cartItems.map((item)=>{
        return <li key={item.id}>Name: {item.title} Price: {item.price} Quantity: {item.quantity}
        <button onClick={()=> dispatch(increase(item.id))}>+</button> 
        <button onClick={()=> dispatch(decrease(item.id))}>-</button>
        <button onClick={()=> dispatch(removeItem(item.id))}>remove Item</button></li>
      })}
      
      </ul>}
    </>
  )
}

