import WindowsEvents from '@/presentation/events';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';

const dispatchCartHeaderEvent = (params: { quantity: number }) => {
  console.log('Cart Header');
  customDispatchEvent<CartHeaderEventPayload>({
    name: WindowsEvents.CART_HEADER,
    detail: {
      isShoppingCartUsed: true,
      quantityItems: params.quantity,
    },
  });
};

export default dispatchCartHeaderEvent;
