import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showShoppingCart: false,
  showSearch: false,
  showQuickView: false
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setShowShoppingCart: (state,action) => {
        state.showShoppingCart = action.payload;
    },
    setShowSearch: (state,action) => {
      state.showSearch = action.payload;
    },
    setShowQuickView: (state,action) => {
      state.showQuickView = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setShowShoppingCart,
    setShowSearch,
    setShowQuickView
 } = popupSlice.actions;

export const selectShowShoppingCart = (state) => state.popup.showShoppingCart;
export const selectShowSearch = (state) => state.popup.showSearch;
export const selectShowQuicView = (state) => state.popup.showQuickView;

export default popupSlice.reducer;