import { CartHeaderEventPayload } from '@/domain/entities/events/cart-header-event';
import { ShoppingCart } from '@/domain/entities/shopping-cart/shopping-cart.response';
import WindowsEvents from '@/presentation/events';
import { useAppDispatch } from '@/presentation/hooks/storeHooks';
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
    document.addEventListener(WindowsEvents.CART_DATA, handleCartDataEvent);
  }, [handleCartDataEvent]);

  useEffect(() => {
    document.addEventListener(WindowsEvents.CART_HEADER, handleCartHeaderEvent);
  }, [handleCartHeaderEvent]);

  return <>{children}</>;
};

export default CartEventLayout;
