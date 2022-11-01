import { configureStore } from '@reduxjs/toolkit'
import popupReducer from './slices/popupSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    cart: cartReducer,
  },
})