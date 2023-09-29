import { ContentBody } from '@/domain/entities/content/content.types';
import getContentEvent from '@/domain/use-cases/content/get-content-event';
import ContentCmsView from '@/presentation/modules/content-cms-view';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  view: string;
  event: string;
}

const PrivateLanding: NextPage = () => {
  const { query } = useRouter();
  const { view, event } = query as ParsedUrlQueryForPage;
  const [content, setContent] = useState<ContentBody[] | any>([]);

  useEffect(() => {
    (async () => {
      if (!view) return;
      const response = await getContentEvent(view, event);
      if (response) setContent(response);
    })();
  }, [view, event]);

  return <ContentCmsView content={content} />;
};

export default PrivateLanding;
