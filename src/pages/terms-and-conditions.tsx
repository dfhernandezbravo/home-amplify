import ContentService from '@/application/services/content';
import React, { useEffect, useState } from 'react';
import { ContentCMS } from '../domain/entities/content/content.types';
import { GetStaticProps } from 'next';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import TermsAndConditionsView from '@/presentation/modules/terms-and-conditions/view';
import Desktop from '@/presentation/components/layouts/Desktop';
import Mobile from '@/presentation/components/layouts/Mobile';
import TermsAndConditionsViewMobile from '@/presentation/modules/terms-and-conditions/mobile';
import NotFound from '@/presentation/modules/n0/NotFound';

interface Props {
  contentCMS: ContentCMS | { content: [] };
}

export const getStaticProps = (async () => {
  const { data } = await ContentService.getContentWithEvent(
    'terminos-y-condiciones',
  );
  return {
    props: {
      contentCMS: data,
    },
  };
}) satisfies GetStaticProps<Props>;

const TermsAndConditions = ({ contentCMS }: Props) => {
  const { content } = contentCMS;
  const [contentHome, setContentHome] = useState<ContentCMS>({
    content: [],
    eventName: '',
    viewName: '',
  });

  useEffect(() => {
    (async () => {
      const { data } = await ContentService.getContentWithEvent(
        'home-headless',
      );
      if (data?.content?.length > 0) {
        setContentHome(data as ContentCMS);
      }
    })();
  }, []);

  return (
    <MainLayout>
      {content.length > 0 ? (
        <>
          <Desktop>
            <TermsAndConditionsView {...(contentCMS as ContentCMS)} />
          </Desktop>
          <Mobile>
            <TermsAndConditionsViewMobile {...(contentCMS as ContentCMS)} />
          </Mobile>
        </>
      ) : (
        <>{contentHome && contentHome?.content?.length > 0 && <NotFound />}</>
      )}
    </MainLayout>
  );
};

export default TermsAndConditions;
