import totalItems from '@/domain/helpers/totalItems';
import shoppingCartService from '@/application/services/shopping-cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dispatchCartHeaderEvent  from './dispatch-cart-header-event';
import dispatchMiniCartEvent from './dispatch-mini-cart-event';

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
      const totalQuantity = totalItems(data.items)
      dispatchCartHeaderEvent({ quantity: totalQuantity });
      dispatchMiniCartEvent()
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
      const totalQuantity = totalItems(data.items)
      dispatchCartHeaderEvent({ quantity: totalQuantity });
      dispatchMiniCartEvent()
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);