import WindowsEvents from '@/presentation/events';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';

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
