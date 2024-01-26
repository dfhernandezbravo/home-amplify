import ContentService from '@/application/services/content';
import React from 'react';
import { ContentCMS } from '../domain/entities/content/content.types';
import { GetStaticProps } from 'next';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import TermsAndConditionsView from '@/presentation/modules/terms-and-conditions';

interface Props {
  contentCMS: ContentCMS;
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
  return (
    <MainLayout>
      <TermsAndConditionsView {...contentCMS} />
    </MainLayout>
  );
};

export default TermsAndConditions;
