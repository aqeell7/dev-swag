import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice"
import { addItem } from "../cart/cartSlice"
import "./ProductList.css"

export function ProductsList(){
  const dispatch = useDispatch()
  const items = useSelector(state => state.products.items)
  const status = useSelector(state => state.products.status)

  if( status === 'loading') return <p>Loading...</p>
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
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
           <button onClick={()=>addBtn(item)}>add Item</button></div>
      )
    })}
    </ul>}
    </>
  )
}