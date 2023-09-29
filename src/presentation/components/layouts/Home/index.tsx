/* eslint-disable react-hooks/rules-of-hooks */
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import React, { useCallback, useEffect } from 'react';
import { Container } from './Home.styles';

import ContentComponent from '@/domain/entities/content';
import { ContentBody } from '@/domain/entities/content/content.types';
import getRemoteConfigAwsPersonalize from '@/domain/use-cases/aws-personalize/get-remote-config-aws';
import { getContent } from '@/domain/use-cases/content';
import WindowsEvents from '@/presentation/events';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useTimeValidator } from '@/presentation/hooks/useTimeValidator';
import {
  setCartId,
  updateShoppingCart,
} from '@/presentation/store/shopping-cart/slices/shopping-cart-slice';
import { CartHeaderEventPayload } from '@/domain/entities/events/cart-header-event';
import { ShoppingCart } from '@/domain/entities/shopping-cart/shopping-cart.response';

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
  });

  useEffect(() => {
    dispatch(getContent());
    dispatch(getRemoteConfigAwsPersonalize());
  }, [dispatch]);

  const Component = useCallback((element: ContentBody) => {
    const componentName = element?.component;
    const Element = ContentComponent[componentName];
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
      {content &&
        content?.content?.length > 0 &&
        content?.content?.map((content: ContentBody, index: number) => (
          <Component {...content} key={index} />
        ))}
    </Container>
  );
};
export default Home;
