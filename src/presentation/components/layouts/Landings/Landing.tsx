import { ContentBody } from '@/domain/entities/content/content.types';
import EventContent from '@/domain/entities/eventContent';
import { getContent, getEventContent } from '@/domain/use-cases/content';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import ButtonToTop from '@/presentation/components/atoms/button-to-top';
import Navigation from '@/presentation/modules/n0/Navigation';
import NotFound from '@/presentation/modules/n0/NotFound';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Landing = () => {
  const router = useRouter();

  const [routeQuery, setRouteQuery] = useState<
    undefined | string | null | string[]
  >(null);

  const dispatch = useAppDispatch();

  const { eventContent, errorEventContent, content } = useAppSelector(
    (state) => state.content,
  );

  useEffect(() => {
    setRouteQuery(router?.query?.n0);
  }, [router?.query?.n0]);

  useEffect(() => {
    routeQuery && dispatch(getEventContent(`${routeQuery}`));
    dispatch(getContent());
  });

  const Component = useCallback((element: ContentBody) => {
    const componentName = element?.component;
    const Element = EventContent[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  return (
    <>
      {errorEventContent && content?.content && (
        <NotFound
          {...(content.content.find(
            (item) => (item.component = 'menu-carousel'),
          ) as ContentBody)}
        />
      )}
      {!errorEventContent && (
        <>
          <Navigation landingName={`${routeQuery}`} />
          {!!eventContent?.content?.length &&
            eventContent?.content?.map(
              (content: ContentBody, index: number) => (
                <Component {...content} key={index} />
              ),
            )}
          <ButtonToTop />
        </>
      )}
    </>
  );
};
export default Landing;
