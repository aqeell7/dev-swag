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

  return (
    <>
     {isOpen && <Modal/>}

     <Navbar/>
     <Routes>
      <Route path="/" element={<ProductsList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
     </Routes>

    </>
  )
}

export default App
