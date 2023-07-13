import WindowsEvents from '@/presentation/events';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';

const dispatchMiniCartEvent = () => {
  customDispatchEvent<MiniCartEventPayload>({
    name: WindowsEvents.TOGGLE_CART_ASIDE,
    detail: {
        open: true
    },
  });
};

export default dispatchMiniCartEvent;