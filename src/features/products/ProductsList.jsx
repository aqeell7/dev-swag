import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice"
import { addItem } from "../cart/cartSlice"

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
    <div className="products-grid">
   {status === 'succeeded' &&  <ul>
    {items.map((item)=>{
      return (
        <li key={item.id}>{item.title} price: {item.price} <button onClick={()=>addBtn(item)}>add Item</button></li>
      )
    })}
    </ul>}
    </div>
  )
}