import { ProductModel } from '@/presentation/store/products/product.type';

export type MiniCartEventPayload = {
  open: Boolean;
};

export type MinicartAddProductEvent = {
  data: ShoppingCart;
};

export type MinicartSimulateAddProductEvent = {
  product: ProductModel;
};
