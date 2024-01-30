import {
  SaveShoppingCartItemsRequest,
  SetShoppingCartItemsRequest,
} from '@/domain/entities/shopping-cart/shopping-cart.request';
import { ShoppingCart } from '@/domain/entities/shopping-cart/shopping-cart.response';
import { AxiosResponse } from 'axios';

export default interface ShoppingCartService {
  saveItem(
    data: SaveShoppingCartItemsRequest,
    cartId: string,
  ): Promise<AxiosResponse<ShoppingCart>>;
  setItem(
    data: SetShoppingCartItemsRequest,
    cartId: string,
  ): Promise<AxiosResponse<ShoppingCart>>;
}
