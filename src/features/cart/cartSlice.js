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
    },

    removeItem:(state,action)=>{
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    },
    
    increase:(state, action)=>{
      const existingItem = state.cartItems.find(item => item.id === action.payload)

      if(existingItem){
        existingItem.quantity +=1
      }
    },

    decrease:(state,action)=>{
      const existingItem = state.cartItems.find(item => item.id === action.payload)

      if(existingItem.quantity == 1){
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
      }else{
        existingItem.quantity -=1
      }
    }
  }
})

export const {addItem, removeItem, increase, decrease} = cartSlice.actions

export default cartSlice.reducer