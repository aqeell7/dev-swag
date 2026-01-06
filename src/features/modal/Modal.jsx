import { useDispatch } from "react-redux"
import { clearCart } from "../cart/cartSlice"
import { closeModal } from "./modalSlice"
import "./Modal.css"

export function Modal(){
  const dispatch = useDispatch()
  return(
    <div className="modal-overlay">
    <aside className="modal-container">
      <p className="modal-text">Remove all items from the shopping cart</p>

      <div className="btn-container">
      <button onClick={()=> {
        dispatch(clearCart())
        dispatch(closeModal())
      }}>confirm</button>

      <button onClick={()=> dispatch(closeModal())}>cancel</button>
      </div>
      
    </aside>
    </div >
  )
}