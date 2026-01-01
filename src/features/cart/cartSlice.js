import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems : [],
  amount: 0,
  total:0,
} 

const cartSlice = createSlice({
  name:"cart",
  initialState: initialState,
  reducers :{
    addItem:(state, action)=>{
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      )
      
      if(!existingItem){
        state.cartItems.push({...action.payload, quantity:1})
      }else{
        existingItem.quantity +=1
      } 
    }
  }
})

export const {addItem} = cartSlice.actions

export default cartSlice.reducer