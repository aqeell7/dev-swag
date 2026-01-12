import { useState } from "react"
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";

export function AddProduct(){

  const navigate = useNavigate();
  const dispatch = useDispatch();

 const [product, setProduct] = useState({
  title:"",
  price:"",
  category:"",
  description:"",
  image:null
 })

  function handleChange(e) {
    const { name, value } = e.target;

    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleImageChange(e){
    setProduct(prev =>({
      ...prev,
      image: e.target.files[0]
    }))
  }

  async function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData()

    formData.append('title',product.title)
    formData.append('price',product.price)
    formData.append('category', product.category)
    formData.append('description', product.description)
    formData.append('image',product.image)

    try{
      const res = await fetch(`${BASE_URL}/api/products` ,{
        method: 'POST',
        body:formData
      })

      const data = await res.json();
      console.log(data)
      dispatch(fetchProducts());
      navigate('/')
    }catch(error){

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} />

      <input type="text" name="price" placeholder="price" value={product.price} onChange={handleChange} />

      <input type="text" name="category" placeholder="category" value={product.category} onChange={handleChange} />

      <textarea type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange}/>

      <input type="file" accept="image/*" onChange={handleImageChange} />
    
     <button type="submit">Add Product</button>
    </form>
  )
}