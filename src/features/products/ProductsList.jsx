import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice"
import { addItem } from "../cart/cartSlice"
import "./ProductList.css"
import { ProductDetail } from "./ProductDetail"
import { Link } from "react-router-dom"


export function ProductsList(){
  const dispatch = useDispatch()
  const items = useSelector(state => state.products.items)
  const status = useSelector(state => state.products.status)

  if( status === 'loading') return <div className="loading-spinner"></div>
  if(status === 'failed') return <p>Error fetching the products</p>

  function addBtn(item) {
    dispatch(addItem(item))
  }

  return (
    <>
   {status === 'succeeded' &&  <ul className="products-grid">
    {items.map((item)=>{
      return (
        <div className="product-card" key={item.id}>
          <Link to={`/product/${item.id}`} >
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          </Link>
           <button onClick={()=>addBtn(item)}>add Item</button></div>
      )
    })}
    </ul>}
    </>
  )
}