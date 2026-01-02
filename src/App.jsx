import { ProductsList } from './features/products/ProductsList'
import { Cart } from './features/cart/Cart'
import { Modal } from './features/modal/Modal'
import { useSelector } from 'react-redux'

function App() {
  const isOpen = useSelector((state)=> state.modal.isOpen)

  return (
    <>
     <ProductsList/>
     <Cart/>
     {isOpen && <Modal/>}
    </>
  )
}

export default App
