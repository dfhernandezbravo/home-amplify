import React from 'react';
import ContentCmsView from '../content-cms-view';
import { useQuery } from 'react-query';
import getContentEvent from '@/domain/use-cases/content/get-content-event';

const Home = () => {
  const view = 'home-headless';
  const { isLoading, isError, data } = useQuery(['home-headless', view], () =>
    getContentEvent(view),
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Loading...</div>;

  if (!data) return <div>No hay datos</div>;

  return <ContentCmsView content={data} />;
};

export default Home;
