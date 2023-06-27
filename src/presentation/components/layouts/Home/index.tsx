import React, { useCallback, useEffect } from 'react';
import { Container } from './Home.styles';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';

import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useSmartBannerTime from '@/presentation/hooks/useSmartBannerTime';

import SectionCencosud from '@/presentation/modules/SectionCencosud';

import Content from '@/domain/entities/content';
import { getContent } from '@/domain/use-cases/content';
import { ContentStruct } from '@/domain/interfaces/Content.types';

const Home = () => {
  const dispatch = useAppDispatch();

  const { content, loadingContent } = useAppSelector((state) => state.content);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  const { isXs, isSm } = useBreakpoints();
  const showSmartBanner = useSmartBannerTime(new Date().getTime());

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
    </Container>
  );
};
export default Home;