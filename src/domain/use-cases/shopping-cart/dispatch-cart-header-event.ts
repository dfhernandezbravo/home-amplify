import { CartHeaderEventPayload } from '@/domain/entities/events/cart-header-event';
import WindowsEvents from '@/presentation/events';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';

const dispatchCartHeaderEvent = (params: { quantity: number }) => {
  customDispatchEvent<CartHeaderEventPayload>({
    name: WindowsEvents.CART_HEADER,
    detail: {
      isShoppingCartUsed: true,
      quantityItems: params.quantity,
    },
  });
};

export default dispatchCartHeaderEvent;
