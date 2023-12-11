import React from 'react';
import ContentCmsView from '../content-cms-view';
import { useQuery } from 'react-query';
import getContentEvent from '@/domain/use-cases/content/get-content-event';
import HomeSkeleton from '@/presentation/components/layouts/home-skeleton';

const Home = () => {
  const view = 'home-headless';
  const { isLoading, isError, data } = useQuery(['home-headless', view], () =>
    getContentEvent(view),
  );

  if (isLoading) return <HomeSkeleton />;

  if (isError) return <div>Loading Home...</div>;

  if (!data) return <div>No hay datos</div>;

  return <ContentCmsView content={data} />;
};

export default Home;
