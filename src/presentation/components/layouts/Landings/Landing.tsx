/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable complexity */
import { ContentBody } from '@/domain/entities/content/content.types';
import EventContent from '@/domain/entities/eventContent';
import { getContent } from '@/domain/use-cases/content';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';
import ButtonToTop from '@/presentation/components/atoms/button-to-top';
import Navigation from '@/presentation/modules/n0/Navigation';
import NotFound from '@/presentation/modules/n0/NotFound';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import ContentService from '@/application/services/content';
import { GetServerSideProps } from 'next';

const Landing = ({ contentCMS }: any) => {
  console.log('contentCMS', contentCMS);

  const router = useRouter();

  const [routeQuery, setRouteQuery] = useState<
    undefined | string | null | string[]
  >(null);

  const dispatch = useAppDispatch();

  const contentStore = useAppSelector((state) => state.content);

  useEffect(() => {
    setRouteQuery(router?.query?.department);
  }, [router?.query?.department]);

  useEffect(() => {
    dispatch(getContent());
  }, []);

  const Component = useCallback((element: ContentBody) => {
    const componentName = element?.component;
    const Element = EventContent[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  if (!contentStore?.errorEventContent && !contentStore?.content?.content)
    return null;

  return (
    <>
      {contentStore.errorEventContent && contentStore.content?.content && (
        <NotFound />
      )}
      {!contentStore.errorEventContent && (
        <>
          <Navigation landingName={`${routeQuery}`} />
          {!!contentStore.eventContent?.content?.length &&
            contentStore.eventContent?.content?.map(
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

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { department } = query as { department: string };
  const eventContent = await ContentService.getContentWithEvent(
    `landing-${department}`,
  );
  return {
    props: {
      eventContent,
    },
  };
}) satisfies GetServerSideProps<any>;
export default Landing;
