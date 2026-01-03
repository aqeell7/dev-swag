import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();
  const items = useSelector(state => state.products.items);
  
  console.log(items)
  const product = items.find(item => item.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
    </div>
  );
}
