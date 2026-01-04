import { createSlice } from "@reduxjs/toolkit"

const savedCart = JSON.parse(localStorage.getItem('cartItems'))

const initialState =  {
  cartItems : savedCart || [],
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
    },

    calculateTotals:(state)=>{
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item)=>{
        amount  += item.quantity
        total += item.quantity * item.price
      })  

      state.amount = amount
      state.total = total.toFixed(2)
    },

    clearCart:(state)=>{
      state.cartItems.length = 0
      state.amount = 0
      state.total = 0
    }
  }
})

export const {addItem, removeItem, increase, decrease, calculateTotals, clearCart} = cartSlice.actions

export default cartSlice.reducer