/* eslint-disable react-hooks/rules-of-hooks */
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import React, { useCallback, useEffect } from 'react';
import { Container } from './Home.styles';

import ContentComponent from '@/domain/entities/content';
import { ContentCMS } from '@/domain/entities/content/content.types';
import getRemoteConfigAwsPersonalize from '@/domain/use-cases/aws-personalize/get-remote-config-aws';
import { getContent } from '@/domain/use-cases/content';
import WindowsEvents from '@/presentation/events';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useTimeValidator } from '@/presentation/hooks/useTimeValidator';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/store/shopping-cart/slices/shopping-cart-slice';
import SmartBanner from '@/presentation/modules/SmartBanner';

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    methods: { sendPageviewVirtualEvent },
  } = useAnalytics();

  const { content } = useAppSelector((state) => state.content);

  useEffect(() => {
    sendPageviewVirtualEvent({
      event: 'pageViewVirtual',
      location: `${window?.location?.href}`,
      page: '/',
      title: 'Home',
      version: 'Home headless',
    });
  }, []);

  useEffect(() => {
    dispatch(getContent());
    dispatch(getRemoteConfigAwsPersonalize());
  }, [dispatch]);

  type ComponentStruct<T> = {
    element: T;
  };

  const Component = useCallback(<T,>(element: ComponentStruct<T> | any) => {
    const componentName = element?.component;
    const Element = ContentComponent[`${componentName}`];
    const enabledTime = useTimeValidator({
      startDate: element?.startDate,
      endDate: element?.endDate,
      isActive: element?.isActive,
    });

    return Element ? enabledTime ? <Element {...element} /> : <></> : <></>;
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
    <Container className="home-mcf">
      {content?.content?.length > 0 &&
        content?.content?.map((content: ContentCMS, index: number) => (
          <Component {...content} key={index} />
        ))}
      <SmartBanner
        android={{
          avalible: true,
          link: 'https://play.google.com/store/apps/details?id=com.cencosud.easy.cl',
        }}
        ios={{
          avalible: true,
          link: 'https://apps.apple.com/cl/app/easy-renueva-tu-hogar/id6444291497',
        }}
        hideTime={10}
      />
    </Container>
  );
};
export default Home;
