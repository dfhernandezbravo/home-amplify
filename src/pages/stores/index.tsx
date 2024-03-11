import { GetServerSideProps } from 'next';
import getContentEvent from '@/domain/use-cases/content/get-content-event';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
// import Stores from '@/presentation/modules/content-cms-view/components/stores';
import { ContentBody } from '@/domain/entities/content/content.types';
import ContentCmsView from '@/presentation/modules/content-cms-view';

interface PageProps {
  content: ContentBody[] | null;
}

const StoresPage = ({ content }: PageProps) => {
  if (!content?.length) return null;

  return (
    <MainLayout>
      <ContentCmsView content={content} />
    </MainLayout>
  );
};

export const getServerSideProps = (async () => {
  try {
    const content = await getContentEvent('store');
    return { props: { content } };
  } catch (error) {
    return { props: { content: null } };
  }
}) satisfies GetServerSideProps<PageProps>;

export default StoresPage;
