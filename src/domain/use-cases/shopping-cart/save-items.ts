import shoppingCartService from '@/application/services/shopping-cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dispatchCartHeaderEvent from './dispatch-cart-header-event';

type ParamsUseCase = {
  data: SaveShoppingCartItemsRequest;
  cartId: string;
};

const saveItemsShoppingCart = createAsyncThunk(
  'shopping-cart/items',
  async (params: ParamsUseCase, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await shoppingCartService.saveItem(
        params.data,
        params.cartId,
      );
      dispatchCartHeaderEvent({ quantity: 1 });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default saveItemsShoppingCart;
