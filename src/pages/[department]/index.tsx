/* eslint-disable complexity */
// import Landing from './Landing';
import { Container } from '@/presentation/components/layouts/Landings/Landing.styles';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import { GetServerSideProps } from 'next';
import ContentService from '@/application/services/content';
import {
  ContentBody,
  ContentCMS,
} from '@/domain/entities/content/content.types';
import Navigation from '@/presentation/modules/n0/Navigation';
import { useCallback } from 'react';
import EventContent from '@/domain/entities/eventContent';
import ButtonToTop from '@/presentation/components/atoms/button-to-top';
import NotFound from '@/presentation/modules/n0/NotFound';

interface Props {
  cmsContent: ContentCMS | { content: [] };
  query: string;
}

const Landings = ({ cmsContent, query }: Props) => {
  console.log('cmsContent', cmsContent);

  const Component = useCallback((element: ContentBody) => {
    const componentName = element?.component;
    const Element = EventContent[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  return (
    <MainLayout>
      <Container>
        {!cmsContent?.content?.length && <NotFound />}
        {cmsContent?.content && (
          <>
            <Navigation landingName={query} />
            {!!cmsContent?.content?.length &&
              cmsContent.content?.map((content: ContentBody, index: number) => (
                <Component {...content} key={index} />
              ))}
            <ButtonToTop />
          </>
        )}
      </Container>
    </MainLayout>
  );
};
export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { department } = query as { department: string };
  const cmsContent = await ContentService.getContentWithEvent(
    `landing-${department}`,
  );
  return {
    props: {
      cmsContent: cmsContent?.data,
      query: department,
    },
  };
}) satisfies GetServerSideProps<Props>;

export default Landings;
