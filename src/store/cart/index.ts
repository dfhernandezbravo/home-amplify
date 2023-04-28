import { customDispatchEvent } from './../events/dispatchEvents';
import { createSlice } from "@reduxjs/toolkit";
import { CartItemModel } from './cart.type';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as CartItemModel[]
  },
  reducers:{
    setAddProductInCart: (state, { payload }) => {
      console.log('call setAddProductInCart')
      const currentProduct = state.cart?.find((pr: CartItemModel) => pr.id === payload.id);
      if (currentProduct) {
        const quantity = currentProduct?.quantity || 0;
        const removeCurrent = state.cart?.filter((pr: CartItemModel) => pr.id !== payload.id);
        if (removeCurrent?.length > 0) {
          const value = { ...currentProduct, quantity: quantity + 1 };
          state.cart = [...removeCurrent, value];
          customDispatchEvent({name: 'ADD_EXISTING_PRODUCT_IN_CART', detail: value})
        } else {
          const value = { ...currentProduct, quantity: quantity + 1 }
          state.cart = [value];
          customDispatchEvent({name: 'ADD_EXISTING_PRODUCT_IN_CART', detail: value})
        }
      } else {
        const value = { ...payload, quantity: 1 } 
        state.cart = [...state.cart, value];
        customDispatchEvent({name: 'ADD_NEW_PRODUCT_IN_CART', detail: value})
      }
    },
    setRemoveProductInCart: (state, { payload }) => {
      const findProductInCart = state.cart?.find((pr: CartItemModel) => pr.id === payload.id);
      if (findProductInCart) {
        const quantity = findProductInCart?.quantity || 0;
        const removeProductInCart = state.cart?.filter((pr: CartItemModel) => pr.id !== payload.id);
        if (quantity > 1) {
          const value = { ...findProductInCart, quantity: quantity - 1}
          state.cart = [...removeProductInCart, value];
          customDispatchEvent({name: 'REMOVE_PRODUCT_IN_CART', detail: value})
        } else {
          state.cart = removeProductInCart;
          customDispatchEvent({name: 'REMOVE_PRODUCT_IN_CART', detail: removeProductInCart})
        }
      } 
    }
  }
});
export default cartSlice;