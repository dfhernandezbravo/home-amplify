/* eslint-disable complexity */
import { Container } from '@/presentation/components/layouts/Landings/Landing.styles';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentService from '@/application/services/content';
import {
  ContentBody,
  ContentCMS,
} from '@/domain/entities/content/content.types';
import Navigation from '@/presentation/modules/n0/Navigation';
import { useCallback, useEffect, useState } from 'react';
import EventContent from '@/domain/entities/eventContent';
import ButtonToTop from '@/presentation/components/atoms/button-to-top';
import NotFound from '@/presentation/modules/n0/NotFound';
import { useRouter } from 'next/router';

const Landings = () => {
  const router = useRouter();
  const pathName = router.query['department'];
  const [loading, setLoading] = useState(true);

  const [cmsContent, setCmsContent] = useState<
    ContentCMS | { content: [] } | null
  >(null);

  const Component = useCallback((element: ContentBody) => {
    const componentName = element?.component;
    const Element = EventContent[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  const getContent = async () => {
    try {
      setLoading(true);
      const response = await ContentService.getContentWithEvent(
        `landing-${pathName}`,
      );

      setCmsContent(response.data as ContentCMS | { content: [] });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContent();
  }, [pathName]);

  if (loading || !cmsContent?.content) {
    return null;
  }
  if (!loading && !cmsContent?.content?.length) {
    return <NotFound />;
  }

  return (
    <MainLayout>
      <Container>
        <Navigation landingName={pathName as string} />
      </Container>
      {cmsContent.content?.map((content: ContentBody, index: number) => (
        <Container
          key={index}
          $fullWidth={content.component === 'n0-banner' && content.fullWidth}
        >
          <Component {...content} />
        </Container>
      ))}
      <ButtonToTop />
    </MainLayout>
  );
};

export default Landings;
