import { useEffect, useState } from "react"
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

  const [selectedCategory, setSelectedCategory] = useState('all')

  const uniqueCategories = [...new Set(items.map(p => p.category))]

  const filteredItems = selectedCategory === 'all' ? items
  :items.filter(item => item.category === selectedCategory)

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  if( status === 'loading') return <div className="loading-spinner"></div>
  else if(status === 'failed') return <p>Error fetching the products</p>

  function addBtn(item) {
    dispatch(addItem(item))
  }

  return (
    <>
      <div className="filter-container">
      <button
        onClick={() => setSelectedCategory("all")}
        className={selectedCategory === "all" ? "active" : ""}
      >
        All
      </button>

      {uniqueCategories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {capitalize(category)}
        </button>
      ))}
    </div>


   {status === 'succeeded' &&  <ul className="products-grid">
    {filteredItems.map((item)=>{
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