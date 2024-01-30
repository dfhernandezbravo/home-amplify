import React from 'react';
import ContentCmsView from '../content-cms-view';
import { ContentCMS } from '@/domain/entities/content/content.types';

const Home = (props: ContentCMS) => {
  return <ContentCmsView content={props?.content} />;
};

export default Home;
