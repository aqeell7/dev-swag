import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/products/productsSlice";
import modalReducer from "../features/modal/modalSlice" 


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    modal:modalReducer
  },
});
