import PrivacyPolicyView from './view/index';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentService from '@/application/services/content';
import { ContentCMS } from '@/domain/entities/content/content.types';
import { useEffect, useState } from 'react';

const PrivacyPolicyContent = () => {
  const [contentCMS, setContentCMS] = useState<ContentCMS>({
    content: [],
    eventName: '',
    viewName: '',
  });

  useEffect(() => {
    (async () => {
      const { data } = await ContentService.getContentWithEvent(
        'privacy-policy',
      );
      if (data?.content?.length > 0) {
        setContentCMS(data as ContentCMS);
      }
    })();
  }, []);

  return (
    <MainLayout>
      <PrivacyPolicyView {...contentCMS} />
    </MainLayout>
  );
};

export default PrivacyPolicyContent;
