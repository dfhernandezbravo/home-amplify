import React from 'react';
import { Provider } from 'react-redux';
import store from '@/presentation/store';
import Head from 'next/head';
import Home from '@/presentation/components/layouts/Home';
import Landings from '@/presentation/components/layouts/Landings';

const HomeLayout = () => {


  return (
    <Provider store={store}>
      <Head>
        
      </Head>
      <Home />
    </Provider>
  );
};
export default HomeLayout;
