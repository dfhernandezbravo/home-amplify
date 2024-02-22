import TermsAndConditionsView from './view/index';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentService from '@/application/services/content';
import { ContentCMS } from '@/domain/entities/content/content.types';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

const TermsAndConditions = (
  props: InferGetServerSidePropsType<GetServerSideProps>,
) => {
  console.log('propsTerms', props);
  const { repo } = props;

  return (
    <MainLayout>
      <TermsAndConditionsView {...repo} />
    </MainLayout>
  );
};

export default TermsAndConditions;

export const getServerSideProps = (async (ctx: GetServerSidePropsContext) => {
  console.log('ctx', ctx);
  if (ctx?.params?.content) {
    try {
      const { data } = await ContentService.getContentWithEvent(
        'terminos-y-condiciones',
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
    props: {
      repo: {
        content: [],
      },
    },
  };
}) satisfies GetServerSideProps<{
  repo:
    | ContentCMS
    | {
        content: [];
      };
}>;
