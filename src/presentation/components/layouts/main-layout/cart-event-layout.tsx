import { CartHeaderEventPayload } from '@/domain/entities/events/cart-header-event';
import { ShoppingCart } from '@/domain/entities/shopping-cart/shopping-cart.response';
import WindowsEvents from '@/presentation/events';
import { useAppDispatch } from '@/presentation/hooks/storeHooks';
import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/store/shopping-cart/slices/shopping-cart-slice';
import React, { useCallback, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const CartEventLayout = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const handleCartDataEvent = useCallback(
    (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent<{ shoppingCart: ShoppingCart }>;
      dispatch(updateShoppingCart(customEvent.detail.shoppingCart));
    },
    [dispatch],
  );

  const handleCartHeaderEvent = useCallback(
    (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent<CartHeaderEventPayload>;
      const cartId = customEvent.detail.cartId;
      if (cartId) dispatch(setCartId(cartId));
    },
    [dispatch],
  );

  useEffect(() => {
    document.addEventListener(WindowsEvents.GET_CART_ID, handleCartHeaderEvent);
    document.addEventListener(
      WindowsEvents.GET_SHOPPING_CART,
      handleCartDataEvent,
    );
  }, [handleCartDataEvent, handleCartHeaderEvent]);

  useEffect(() => {
    customDispatchEvent({
      name: WindowsEvents.DISPATCH_GET_CART_ID,
      detail: { origin: 'HOME' },
    });
    customDispatchEvent({
      name: WindowsEvents.DISPATCH_GET_CART,
      detail: { origin: 'HOME' },
    });
  }, []);

  return <>{children}</>;
};

export default CartEventLayout;
