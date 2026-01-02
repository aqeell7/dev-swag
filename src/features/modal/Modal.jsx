import { useDispatch } from "react-redux"
import { clearCart } from "../cart/cartSlice"
import { closeModal } from "./modalSlice"

export function Modal(){
  const dispatch = useDispatch()
  return(
    <>
    <aside>
      <p>"Remove all items from the shopping cart"</p>
      <button onClick={()=> {
        dispatch(clearCart())
        dispatch(closeModal())
      }}>confirm</button>

      <button onClick={()=> dispatch(closeModal())}>cancel</button>
    </aside>
    </>
  )
}