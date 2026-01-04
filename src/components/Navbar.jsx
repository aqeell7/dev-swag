import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Navbar(){

  const amount = useSelector(state => state.cart.amount)
  return(
    <>
     <nav>
     <Link to="/">Home</Link>
     {" | "}
     <Link to="/cart">Cart({amount})</Link>
     {" | "}
     <Link to="checkout">checkout</Link>
     </nav>
    </>
  )
}