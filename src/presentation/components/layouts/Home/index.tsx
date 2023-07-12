import React, { useCallback, useEffect } from 'react';
import { Container } from './Home.styles';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';

import SectionCencosud from '@/presentation/modules/SectionCencosud';
import Content from '@/domain/entities/content';
import { getContent } from '@/domain/use-cases/content';
import { ContentStruct } from '@/domain/interfaces/Content.types';
import ButtonToTop from '@/presentation/modules/ButtonToTop';
import SmartBanner from '@/presentation/modules/SmartBanner';

const Home = () => {
  const dispatch = useAppDispatch();

  const { content } = useAppSelector((state) => state.content);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  type ComponentStruct<T> = {
    element: T;
  };

  const Component = useCallback(<T,>(element: ComponentStruct<T> | any) => {
    const componentName = element?.component;
    const Element = Content[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  return (
    <Container>
      {content?.content?.length > 0 &&
        content?.content?.map((content: ContentStruct, index: number) => (
          <Component {...content} key={index} />
        ))}
      <SectionCencosud />
      <SmartBanner 
        android={{
          avalible: true,
          link: 'https://play.google.com/store/apps/details?id=com.cencosud.easy.cl'
        }}
        ios={{
          avalible: true,
          link: 'https://apps.apple.com/cl/app/easy-renueva-tu-hogar/id6444291497'
        }}
        hideTime={5}
      />
      <ButtonToTop />
    </Container>
  );
};
export default Home;