import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css"

export function Navbar(){

  const amount = useSelector(state => state.cart.amount)
  return(
    <>
     <nav className="navbar">
     <Link to="/">Home</Link>
 
     <Link to="/cart">Cart({amount})</Link>

     <Link to="checkout">checkout</Link>

     <Link to="addProducts">Add products</Link>
     </nav>
    </>
  )
}