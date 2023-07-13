import { AxiosResponse } from 'axios';

export default interface ShoppingCartService {
  saveItem(
    data: SaveShoppingCartItemsRequest,
    cartId: string,
  ): Promise<AxiosResponse<ShoppingCart>>;
}
