import { Product } from '@/presentation/store/products/product.type';
import { ShoppingCart } from '../shopping-cart/shopping-cart.response';

export type MiniCartEventPayload = {
  open: boolean;
};

export type MinicartAddProductEvent = {
  data: ShoppingCart;
};

export type MinicartSimulateAddProductEvent = {
  product: Product;
};

type ResponseError = {
  error: string;
  errorCode: string;
  message: string;
  statusCode: number;
};

export type AddProductErrorEvent = {
  error: ResponseError;
  itemId: string;
};

export type MiniCartAddProductErrorEvent = {
  data: AddProductErrorEvent;
};
