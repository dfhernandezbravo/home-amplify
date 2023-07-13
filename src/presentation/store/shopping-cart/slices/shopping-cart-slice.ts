import saveItemsShoppingCart from '@/domain/use-cases/shopping-cart/save-items';
import { createSlice } from '@reduxjs/toolkit';

type ShoppingCartState = {
  shoppingCart: ShoppingCart | null;
  cartId?: string;
};

const initialState: ShoppingCartState = {
  cartId: undefined,
  shoppingCart: null,
};

const shoppingCartSlice = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    setCartId: (state, { payload }: { payload: string | undefined }) => {
      state.cartId = payload;
    },
    updateShoppingCart: (
      state,
      { payload }: { payload: ShoppingCart | null },
    ) => {
      state.shoppingCart = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveItemsShoppingCart.fulfilled, (state, { payload }) => {
      state.shoppingCart = payload;
    });
  },
});

export const { setCartId, updateShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice;
