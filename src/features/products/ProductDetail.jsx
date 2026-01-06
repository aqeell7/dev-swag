import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"
import { addItem } from "../cart/cartSlice";

export function ProductDetail() {
  const { id } = useParams();
  const {items,status,error} = useSelector(state => state.products);

  if(status === "loading"){
    return <p>Loading...</p>
  }

  if(status === "failed"){
    return <p>"sorry, we couldn't load the products</p>
  }

  console.log(items)
  const product = items.find(item => item.id === Number(id));

  if(!product){
    return <p>product not found</p>
  }

  let dispatch = useDispatch()

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />

      <div className="product-info">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={()=> dispatch(addItem(product))}>Add to Cart</button> 
      </div>
    </div>
  );
}
