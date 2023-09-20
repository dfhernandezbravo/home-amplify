import totalItems from '@/domain/helpers/totalItems';
import shoppingCartService from '@/application/services/shopping-cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dispatchCartHeaderEvent from './dispatch-cart-header-event';
import {
  dispatchMiniCartEvent,
  dispatchMiniCartAddProductEvent,
} from './dispatch-mini-cart-event';
import { AxiosError } from 'axios';
import {
  SaveShoppingCartItemsRequest,
  SetShoppingCartItemsRequest,
} from '@/domain/entities/shopping-cart/shopping-cart.request';

type ParamsUseCase = {
  data: SaveShoppingCartItemsRequest;
  cartId: string;
  quantity: number;
  productReferenceId?: string;
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
      const totalQuantity = totalItems(data.items);
      dispatchCartHeaderEvent({ quantity: totalQuantity });
      dispatchMiniCartEvent();
      dispatchMiniCartAddProductEvent({ ...data });
      return fulfillWithValue(data);
    } catch (error) {
      const axiosError = error as AxiosError;
      const id = params?.productReferenceId;

      return rejectWithValue({
        error: axiosError?.response?.data,
        itemId: id,
      });
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
      const totalQuantity = totalItems(data.items);
      dispatchCartHeaderEvent({ quantity: totalQuantity });
      dispatchMiniCartEvent();
      dispatchMiniCartAddProductEvent({ ...data });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
