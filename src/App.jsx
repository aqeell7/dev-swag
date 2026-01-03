import { ProductsList } from './features/products/ProductsList'
import { Cart } from './features/cart/Cart'
import { Modal } from './features/modal/Modal'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


function App() {
  const isOpen = useSelector((state)=> state.modal.isOpen)

  const cartItems = useSelector(state => state.cart.cartItems)

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])

  return (
    <>
     <ProductsList/>
     <Cart/>
     {isOpen && <Modal/>}
    </>
  )
}

export default App
