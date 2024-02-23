import React from 'react';
import LegalsContainer from './legals.styles';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import { GetServerSidePropsContext } from 'next';
import { ContentCMS } from '@/domain/entities/content/content.types';
import LegalsContent from '@/presentation/modules/legals-content';
import ContentService from '@/application/services/content';

type Props = {
  repo: ContentCMS;
};

const LegalsLayout = (props: Props) => {
  const { repo } = props;
  return (
    <MainLayout>
      <LegalsContainer>
        <LegalsContent {...repo} />
      </LegalsContainer>
    </MainLayout>
  );
};

export default LegalsLayout;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  if (ctx?.query?.content) {
    try {
      const { data } = await ContentService.getContentWithEvent(
        Array.isArray(ctx.query.content)
          ? ctx.query.content[0]
          : ctx.query.content,
      );
      return { props: { repo: data } };
    } catch (error) {
      return {
        props: {
          repo: {
            content: [],
          },
        },
      };
    }
  }
  return {
    props: {},
  };
};
