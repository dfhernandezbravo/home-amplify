import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import React, { useCallback, useEffect } from 'react';
import { Container } from './Home.styles';

import Content from '@/domain/entities/content';
import { ContentStruct } from '@/domain/interfaces/Content.types';
import { getContent } from '@/domain/use-cases/content';
import WindowsEvents from '@/presentation/events';
import useScrollYPosition from '@/presentation/hooks/useScrollYPosition';
import SectionCencosud from '@/presentation/modules/SectionCencosud';
import SmartBanner from '@/presentation/modules/SmartBanner';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/store/shopping-cart/slices/shopping-cart-slice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isOverScroll } = useScrollYPosition({ minHeight: 100 });

  const { content } = useAppSelector((state) => state.content);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isOverScroll) {
  //     window.postMessage('SHOW_HEADER', 'false');
  //   } else {
  //     window.postMessage('SHOW_HEADER', 'true');
  //   }
  // }, [isOverScroll]);

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
      {content?.content?.length > 0 &&
        content?.content?.map((content: ContentStruct, index: number) => (
          <Component {...content} key={index} />
        ))}
      <SectionCencosud />
      {/*<SmartBanner 
        android={{
          avalible: true,
          link: 'https://play.google.com/store/apps/details?id=com.cencosud.easy.cl',
        }}
        ios={{
          avalible: true,
          link: 'https://apps.apple.com/cl/app/easy-renueva-tu-hogar/id6444291497',
        }}
        hideTime={5}
      />
      {/* <ButtonToTop /> */}
    </Container>
  );
};
export default Home;
