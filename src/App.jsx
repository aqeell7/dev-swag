import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductsList } from './features/products/ProductsList'
import { Cart } from './features/cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductsList/>
     <Cart/>
    </>
  )
}

export default App
