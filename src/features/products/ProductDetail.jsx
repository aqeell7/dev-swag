import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();
  const {items,status,error} = useSelector(state => state.products);

  if(status === "loading"){
    return <p>Loading...</p>
  }

  console.log(items)
  const product = items.find(item => item.id === Number(id));

  if(!product){
    return <p>product not found</p>
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
    </div>
  );
}
