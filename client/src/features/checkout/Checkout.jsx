import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../cart/cartSlice"
import './Checkout.css'

export function Checkout(){

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const[order, setOrder] = useState(null)

  const {cartItems,amount, total} = useSelector(state => state.cart)

  const dispatch = useDispatch()

  function getEstimatedDeliveryDate(createdAt, days = 5){
    const date = new Date(createdAt)
    date.setDate(date.getDate() + days)
    return date.toDateString()
  }

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

    const createdAt = new Date().toISOString();

    setOrder({
      customerName: name,
      address: address,
      items: cartItems,
      totalItems: amount,
      totalPrice: total,
      createdAt,
      estimatedDelivery: getEstimatedDeliveryDate(createdAt, 4)
    })

    console.log(name , address)
    dispatch(clearCart())
  }

  return(
    <div className="checkout-container">
    {!order && (
      <div className="checkout-form">
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
            return <li key={item._id}>
              name: {item.title} | price: {item.price} | quantity: {item.quantity}
            </li>
          })}
        </ul>

        <div>total items:{amount} total price:{total}</div>
        
    </div>
    </div>
    )}

          {order && (
             <div className="checkout-summary">
              <h3>Order Summary</h3>

              <p><strong>Name: </strong>{order.customerName}</p>
              <p><strong>Address: </strong>{order.address}</p>

              <ul>
                {order.items.map((item)=>{
                  return <li key={item._id}>
                    {item.title} x {item.quantity} = ${item.price * item.quantity}
                  </li>
                })}
              </ul>

              <p><strong>Total Items: </strong>{order.totalItems}</p>
              <p><strong>Total Price: </strong>${order.totalPrice}</p>

              <p>Estimated Delivery Date: {order.estimatedDelivery}</p>

             </div>
          )}
    
    </div>
  )
}