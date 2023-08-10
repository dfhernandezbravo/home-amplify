import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from './Workspace.styles';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';

import SectionCencosud from '@/presentation/modules/SectionCencosud';
import Content from '@/domain/entities/content';
import { getWorkspaceContent } from '@/domain/use-cases/content';
import { ContentStruct } from '@/domain/interfaces/Content.types';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/store/shopping-cart/slices/shopping-cart-slice';
import WindowsEvents from '@/presentation/events';
import ButtonToTop from '@/presentation/modules/ButtonToTop';

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
    const Element = Content[`${componentName}`];
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
          workspaceContent?.content?.map((content: ContentStruct, index: number) => (
            <Component {...content} key={index} />
          ))}
        <SectionCencosud />
        <ButtonToTop />
      </Container>
  );
};
export default PrivateWorkspace;