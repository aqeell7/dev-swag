import { useSelector, useDispatch } from "react-redux";
import {removeItem, increase, decrease,calculateTotals, clearCart  } from "./cartSlice";
import { openModal } from "../modal/modalSlice";
import "./Cart.css"

export function Cart(){

  const {cartItems, amount, total} = useSelector(state => state.cart)

  const dispatch = useDispatch()

  if(cartItems.length == 0) return <p>"your cart is empty"</p>
  return (
    <>
    {cartItems.length > 0 && <ul>
      {cartItems.map((item)=>{
        return <article className="cart-item" key={item.id}> 

        <img src={item.image} alt={item.title} className="cart-item-img" />

        <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <p>{item.quantity}</p>
          </div>  

        <div className="cart-item-controls">
        <button className="btn-qty" onClick={()=> dispatch(increase(item.id))}>+</button> 
        <button className="btn-qty" onClick={()=> dispatch(decrease(item.id))}>-</button>
        <button className="btn-danger" onClick={()=> dispatch(removeItem(item.id))}>remove Item</button>
        </div>
        </article>
      })}

      </ul>}

      <footer className="cart-footer">
        <h3>Total: ${total}</h3>
        <button className="btn-clear" onClick={()=> dispatch(openModal())}>clear cart</button>
      </footer>
    </>
  )
}