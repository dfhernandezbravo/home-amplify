import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { Container } from './Workspace.styles';

import ContentComponent from '@/domain/entities/content';
import { ContentCMS } from '@/domain/entities/content/content.types';
import { getWorkspaceContent } from '@/domain/use-cases/content';
import WindowsEvents from '@/presentation/events';
import ButtonToTop from '@/presentation/modules/ButtonToTop';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/store/shopping-cart/slices/shopping-cart-slice';

const PrivateWorkspace = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { workspaceContent } = useAppSelector((state) => state.content);

  useEffect(() => {
    const workspaceRoute: string = `${router?.query?.event}`;
    dispatch(getWorkspaceContent(workspaceRoute));
  }, [dispatch, router]);

  type ComponentStruct<T> = {
    element: T;
  };

  const Component = useCallback(<T,>(element: ComponentStruct<T> | any) => {
    const componentName = element?.component;
    const Element = ContentComponent[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

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

  return (
    <Container>
      {workspaceContent?.content?.length > 0 &&
        workspaceContent?.content?.map((content: ContentCMS, index: number) => (
          <Component {...content} key={index} />
        ))}
      <ButtonToTop />
    </Container>
  );
};
export default PrivateWorkspace;
