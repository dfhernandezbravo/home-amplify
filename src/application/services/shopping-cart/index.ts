import { bffWebInstance } from '@/application/data-source/bff-web-instance';
import ShoppingCartService from '@/domain/interfaces/shopping-cart/shopping-cart-service';

const shoppingCartService: ShoppingCartService = {
  saveItem: (data, cartId) => {
    return bffWebInstance.post(`/shoppingcart/${cartId}/items`, data)
  },
  setItem: (data, cartId) => {
    return bffWebInstance.patch(`/shoppingcart/${cartId}/items`, data)
  }
};

export default shoppingCartService;
