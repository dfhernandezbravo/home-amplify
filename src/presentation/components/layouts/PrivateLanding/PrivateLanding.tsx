import { ContentBody } from '@/domain/entities/content/content.types';
import getContentEvent from '@/domain/use-cases/content/get-content-event';
import ContentCmsView from '@/presentation/modules/content-cms-view';
import store from '@/presentation/store';
import { themeStyled } from '@/presentation/theme';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  view: string;
  event: string;
}

const PrivateLanding: NextPage = () => {
  const { query } = useRouter();
  const { view, event } = query as ParsedUrlQueryForPage;
  const [content, setContent] = useState<ContentBody[]>([]);

  console.log({ event, view });

  useEffect(() => {
    (async () => {
      if (!view) return;
      const response = await getContentEvent(view, event);
      if (response) setContent(response);
    })();
  }, [view, event]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeStyled}>
        <ContentCmsView content={content} />
      </ThemeProvider>
    </Provider>
  );
};

export default PrivateLanding;
