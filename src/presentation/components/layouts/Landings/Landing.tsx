import { ContentCMS } from '@/domain/entities/content/content.types';
import EventContent from '@/domain/entities/eventContent';
import { getContent, getEventContent } from '@/domain/use-cases/content';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import ButtonToTop from '@/presentation/modules/ButtonToTop';
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

  type ComponentStruct<T> = {
    element: T;
  };

  const Component = useCallback(<T,>(element: ComponentStruct<T> | any) => {
    const componentName = element?.component;
    const Element = EventContent[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  return (
    <>
      {errorEventContent && content?.content && <NotFound {...content} />}
      {!errorEventContent && (
        <>
          <Navigation landingName={`${routeQuery}`} />
          {eventContent?.content?.length > 0 &&
            eventContent?.content?.map((content: ContentCMS, index: number) => (
              <Component {...content} key={index} />
            ))}
          <ButtonToTop />
        </>
      )}
    </>
  );
};
export default Landing;
