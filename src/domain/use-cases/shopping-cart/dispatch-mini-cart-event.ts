import {
  MiniCartEventPayload,
  MinicartAddProductEvent,
  MinicartSimulateAddProductEvent,
} from '@/domain/entities/events/mini-cart-event';
import WindowsEvents from '@/presentation/events';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';
import { ProductModel } from '@/presentation/store/products/product.type';

export const dispatchMiniCartEvent = () => {
  customDispatchEvent<MiniCartEventPayload>({
    name: WindowsEvents.TOGGLE_CART_ASIDE,
    detail: {
      open: true,
    },
  });
};

export const dispatchMiniCartAddProductEvent = (data: ShoppingCart) => {
  customDispatchEvent<MinicartAddProductEvent>({
    name: WindowsEvents.ADD_PRODUCT_IN_CART,
    detail: {
      data: data,
    },
  });
};

export const dispatchMinicartSimulateAddProductEvent = (data: ProductModel) => {
  customDispatchEvent<MinicartSimulateAddProductEvent>({
    name: WindowsEvents.SIMULATE_ADD_PRODUCT,
    detail: {
      product: data,
    },
  });
};
