import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import Head from 'next/head';
import { Home } from '@/components/layouts/Home';

const HomeLayout = () => {

  return (
    <Provider store={store}>
      <Head><></></Head>
      <Home />
    </Provider>
  )
};
export default HomeLayout;