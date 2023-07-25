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
