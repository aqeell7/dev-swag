import { useSelector, useDispatch } from "react-redux";
import {removeItem, increase, decrease,calculateTotals, clearCart  } from "./cartSlice";
import { useEffect } from "react";
import { openModal } from "../modal/modalSlice";

export function Cart(){

  const {cartItems, amount, total} = useSelector(state => state.cart)

  const dispatch = useDispatch()

  if(cartItems.length == 0) return <p>"your cart is empty"</p>
  return (
    <>
    ----------Cart Items----------
    {cartItems.length > 0 && <ul>
      {cartItems.map((item)=>{
        return <li key={item.id}>Name: {item.title} Price: {item.price} Quantity: {item.quantity}
        <button onClick={()=> dispatch(increase(item.id))}>+</button> 
        <button onClick={()=> dispatch(decrease(item.id))}>-</button>
        <button onClick={()=> dispatch(removeItem(item.id))}>remove Item</button></li>
      })}
      </ul>}

      <footer>
        Total: ${total}
        <button onClick={()=> dispatch(openModal())}>clear cart</button>
      </footer>
    </>
  )
}