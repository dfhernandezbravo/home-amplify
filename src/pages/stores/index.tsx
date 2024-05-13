import getContentEvent from '@/domain/use-cases/content/get-content-event';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentCmsView from '@/presentation/modules/content-cms-view';
import { useEffect, useState } from 'react';
import { ContentBody } from '@/domain/entities/content/content.types';

const StoresPage = () => {
  const [content, setContent] = useState<ContentBody[]>();

  const getStore = async () => {
    try {
      const content = await getContentEvent('store');
      setContent(content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStore();
  }, []);

  if (!content?.length) return null;

  return (
    <MainLayout>
      <ContentCmsView content={content} />
    </MainLayout>
  );
};

export default StoresPage;
