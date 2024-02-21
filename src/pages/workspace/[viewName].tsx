import { ContentBody } from '@/domain/entities/content/content.types';
import getContentEvent from '@/domain/use-cases/content/get-content-event';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentCmsView from '@/presentation/modules/content-cms-view';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface QueryParams extends ParsedUrlQuery {
  viewName: string;
  event: string;
}

interface PageProps {
  content: ContentBody[] | null;
}

export const getServerSideProps = (async (context) => {
  try {
    const { query } = context;
    const { viewName, event } = query as QueryParams;
    const content = await getContentEvent(viewName, event);
    return { props: { content } };
  } catch (error) {
    return { props: { content: null } };
  }
}) satisfies GetServerSideProps<PageProps>;

const WorkspacePage = ({ content }: PageProps) => {
  if (!content?.length) return <div>Event not found</div>;

  return (
    <MainLayout>
      <ContentCmsView content={content} />
    </MainLayout>
  );
};

export default WorkspacePage;
