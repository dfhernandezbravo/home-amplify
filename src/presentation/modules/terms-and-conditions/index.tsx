import TermsAndConditionsView from './view/index';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentService from '@/application/services/content';
import { ContentCMS } from '@/domain/entities/content/content.types';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

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

const TermsAndConditions = () => {
  const [contentCMS, setContentCMS] = useState<ContentCMS>({
    content: [],
    eventName: '',
    viewName: '',
  });

  useEffect(() => {
    (async () => {
      const { data } = await ContentService.getContentWithEvent(
        'terminos-y-condiciones',
      );
      setContentCMS(data);
    })();
  }, []);

  return (
    <MainLayout>
      <TermsAndConditionsView {...contentCMS} />
    </MainLayout>
  );
};

export default TermsAndConditions;
