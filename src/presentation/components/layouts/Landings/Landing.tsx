import React, { useCallback, useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import { getContent, getEventContent } from '@/domain/use-cases/content';
import { ContentStruct } from '@/domain/interfaces/Content.types';
import ButtonToTop from '@/presentation/modules/ButtonToTop';
import SmartBanner from '@/presentation/modules/SmartBanner';
import { useRouter } from 'next/router';
import EventContent from '@/domain/entities/eventContent';
import Navigation from '@/presentation/modules/n0/Navigation';
import NotFound from '@/presentation/modules/n0/NotFound';

const Landing = () => {
  const router = useRouter();

  let event = router.query.n0;

  const dispatch = useAppDispatch();

  const { eventContent, errorEventContent, loadingContent, content } = useAppSelector(
    (state) => state.content,
  );

  useEffect(() => {
    if (event && typeof event != 'string') {
      event = event[0];
    }
    event && dispatch(getEventContent(event));
    dispatch(getContent());

  }, [dispatch]);

  type ComponentStruct<T> = {
    element: T;
  };

  const Component = useCallback(<T,>(element: ComponentStruct<T> | any) => {
    const componentName = element?.component;
    const Element = EventContent[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  const getEventName = () => {
    return typeof event === 'string' ? event : '';
  };

  return (
    <>
      {errorEventContent && content?.content && <NotFound data={content}/>}
      {!errorEventContent && (
        <>
          <Navigation landingName={getEventName()} />
          {eventContent?.content?.length > 0 &&
            eventContent?.content?.map(
              (content: ContentStruct, index: number) => (
                <Component {...content} key={index} />
              ),
            )}

          <SmartBanner
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
          <ButtonToTop />
        </>
      )}
    </>
  );
};
export default Landing;
