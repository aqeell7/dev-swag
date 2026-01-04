import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../cart/cartSlice"

export function Checkout(){

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const {cartItems,amount, total} = useSelector(state => state.cart)

  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()

    if(!name.trim() || !address.trim()){
      alert('fill all the fields')
      return
    }

    if(cartItems.length === 0){
      alert('your cart is empty')
      return;
    }

    console.log(name , address)
    dispatch(clearCart())
  }

  return(
    <>
    <h3>Checkout Form</h3>

    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter your name" 
      value= {name} onChange={(e)=> setName(e.target.value)} />

      <input type="text" placeholder="enter your address" value={address} onChange={(e)=> setAddress(e.target.value)}  />

      <button type="submit" disabled={cartItems.length === 0}>Place order</button>
      </form>
    </div>

    <div>
        <ul>
          {cartItems.map((item)=>{
            return <li key={item.id}>
              name: {item.title} | price: {item.price} | quantity: {item.quantity}
            </li>
          })}
        </ul>

        <div>total items:{amount} total price:{total}</div>
        
    </div>
    </>
  )
}