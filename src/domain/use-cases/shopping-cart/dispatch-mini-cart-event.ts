import {
  AddProductErrorEvent,
  MiniCartAddProductErrorEvent,
  MiniCartEventPayload,
  MinicartAddProductEvent,
  MinicartSimulateAddProductEvent,
} from '@/domain/entities/events/mini-cart-event';
import { ShoppingCart } from '@/domain/entities/shopping-cart/shopping-cart.response';
import WindowsEvents from '@/presentation/events';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';
import { Product } from '@/presentation/store/products/product.type';

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

export const dispatchMinicartSimulateAddProductEvent = (data: Product) => {
  customDispatchEvent<MinicartSimulateAddProductEvent>({
    name: WindowsEvents.SIMULATE_ADD_PRODUCT,
    detail: {
      product: data,
    },
  });
};

export const dispatchMinicartAddProductErrorEvent = (
  data: AddProductErrorEvent,
) => {
  customDispatchEvent<MiniCartAddProductErrorEvent>({
    name: WindowsEvents.ADD_PRODUCT_ERROR,
    detail: {
      data,
    },
  });
};
