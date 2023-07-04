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
      <ButtonToTop />
    </Container>
  );
};
export default Home;