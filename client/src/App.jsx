import { ProductsList } from './features/products/ProductsList'
import { Cart } from './features/cart/Cart'
import { Modal } from './features/modal/Modal'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { Navbar } from './components/Navbar'
import { ProductDetail } from './features/products/ProductDetail'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './features/products/productsSlice'
import { Checkout } from './features/checkout/Checkout'
import { calculateTotals } from './features/cart/cartSlice'
import { closeModal } from './features/modal/modalSlice'


function App() {
  const isOpen = useSelector((state)=> state.modal.isOpen)

  const cartItems = useSelector(state => state.cart.cartItems)

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  useEffect(()=>{
    dispatch(calculateTotals())
    if(cartItems.length === 0){
      dispatch(closeModal())
    }
  },[cartItems])

  return (
    <>
     {isOpen && <Modal/>}

     <Navbar/>
     <Routes>
      <Route path="/" element={<ProductsList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
    </>
  )
}

export default App
