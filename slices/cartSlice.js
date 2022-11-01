
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const popupSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const item = state.find(p=>p.id===action.payload.id);
        if (item) {
          item.quantity = item.quantity + action.payload.quantity;
        }else {
          state.push(action.payload);
        }
    },
    removeFromCart: (state,action) => {
        return state.filter(item=>item.id!==action.payload);
    },
    decQuantity: (state,action) => {
      const item = state.find(p=>p.id===action.payload);
      if (item?.quantity>1) {
        item.quantity--;
      }else {
        return state.filter(item=>item.id!==action.payload);
      }
    },
    incQuantity: (state,action) => {
      const item = state.find(p=>p.id===action.payload);
      if (item) {
        item.quantity++;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    addToCart,
    removeFromCart,
    decQuantity,
    incQuantity

 } = popupSlice.actions;

export const selectAllCart = (state) => state.cart;
export const selectCartLength = (state) => state.cart.length;

export default popupSlice.reducer;