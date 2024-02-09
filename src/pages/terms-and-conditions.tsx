import ContentService from '@/application/services/content';
import React, { useEffect, useState } from 'react';
import {
  ContentBody,
  ContentCMS,
} from '../domain/entities/content/content.types';
import { GetStaticProps } from 'next';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import TermsAndConditionsView from '@/presentation/modules/terms-and-conditions/view';
import Desktop from '@/presentation/components/layouts/Desktop';
import Mobile from '@/presentation/components/layouts/Mobile';
import TermsAndConditionsViewMobile from '@/presentation/modules/terms-and-conditions/mobile';
import NotFound from '@/presentation/modules/n0/NotFound';

interface Props {
  contentCMS: ContentCMS;
}

export const getStaticProps = (async () => {
  try {
    const { data } = await ContentService.getContentWithEvent(
      'terminos-y-condiciones',
    );
    return {
      props: {
        contentCMS: data,
      },
    };
  } catch (error) {
    return {
      props: {
        contentCMS: {
          content: [],
          eventName: '',
          viewName: '',
        },
      },
    };
  }
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
      setContentHome(data);
    })();
  }, []);

  return (
    <MainLayout>
      {content.length > 0 ? (
        <>
          <Desktop>
            <TermsAndConditionsView {...contentCMS} />
          </Desktop>
          <Mobile>
            <TermsAndConditionsViewMobile {...contentCMS} />
          </Mobile>
        </>
      ) : (
        <>
          {contentHome && contentHome?.content?.length > 0 && (
            <NotFound
              {...(contentHome?.content?.find(
                (item) => item.component === 'menu-carousel',
              ) as ContentBody)}
            />
          )}
        </>
      )}
    </MainLayout>
  );
};

export default TermsAndConditions;
