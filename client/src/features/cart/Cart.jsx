import { useSelector, useDispatch } from "react-redux";
import {removeItem, increase, decrease,calculateTotals, clearCart  } from "./cartSlice";
import { openModal } from "../modal/modalSlice";
import "./Cart.css"
import { BASE_URL } from "../../config";

export function Cart(){

  const {cartItems, amount, total} = useSelector(state => state.cart)

  const dispatch = useDispatch()

  if(cartItems.length == 0) return <p>"your cart is empty"</p>
  return (
    <>
    {cartItems.length > 0 && <ul>
      {cartItems.map((item)=>{
        return <article className="cart-item" key={item._id}> 

        <img className="cart-item-img" src={`${BASE_URL}${item.image}`} alt={item.title} />

        <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <p>{item.quantity}</p>
          </div>  

        <div className="cart-item-controls">
        <button className="btn-qty" onClick={()=> dispatch(increase(item._id))}>+</button> 
        <button className="btn-qty" onClick={()=> dispatch(decrease(item._id))}>-</button>
        <button className="btn-danger" onClick={()=> dispatch(removeItem(item._id))}>remove Item</button>
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