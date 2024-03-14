import { ContentBody } from '@/domain/entities/content/content.types';
import getContentEvent from '@/domain/use-cases/content/get-content-event';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentCmsView from '@/presentation/modules/content-cms-view';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

interface QueryParams extends ParsedUrlQuery {
  viewName: string;
}

interface PageProps {
  content: ContentBody[];
}

export const getServerSideProps = (async (context) => {
  try {
    const { query } = context;
    const { viewName } = query as QueryParams;
    const content = await getContentEvent(viewName);
    return { props: { content } };
  } catch (error) {
    return { props: { content: [] } };
  }
}) satisfies GetServerSideProps<PageProps>;

const LegalsLayout = ({ content }: PageProps) => {
  return (
    <>
      <Head>
        <title>Condiciones legales - Easy.cl - Easy</title>
      </Head>
      <MainLayout>
        <ContentCmsView content={content} />
      </MainLayout>
    </>
  );
};

export default LegalsLayout;
