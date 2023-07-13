import shoppingCartService from '@/application/services/shopping-cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dispatchCartHeaderEvent from './dispatch-cart-header-event';

type ParamsUseCase = {
  data: SaveShoppingCartItemsRequest;
  cartId: string;
  quantity: number;
};
type ParamsSetUseCase = {
  data: SetShoppingCartItemsRequest;
  cartId: string;
  quantity: number;
};

export const saveItemsShoppingCart = createAsyncThunk(
  'shopping-cart/items',
  async (params: ParamsUseCase, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await shoppingCartService.saveItem(
        params.data,
        params.cartId,
      );
      dispatchCartHeaderEvent({ quantity: params.quantity });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const setItemsShoppingCart = createAsyncThunk(
  'shopping-cart/items/set',
  async (params: ParamsSetUseCase, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await shoppingCartService.setItem(
        params.data,
        params.cartId,
      );
      dispatchCartHeaderEvent({ quantity: params.quantity });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
