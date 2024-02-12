import TermsAndConditionsView from './view/index';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import ContentService from '@/application/services/content';
import { ContentCMS } from '@/domain/entities/content/content.types';
import { useEffect, useState } from 'react';

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
