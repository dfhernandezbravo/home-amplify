import { bffWebInstance } from '@/application/data-source/bff-web-instance';
import ShoppingCartService from '@/domain/interfaces/shopping-cart/shopping-cart-service';

const shoppingCartService: ShoppingCartService = {
  saveItem: (data, cartId) =>
    bffWebInstance.post(`/shoppingcart/${cartId}/items`, data),
};

export default shoppingCartService;
