import React from 'react';
import { Provider } from 'react-redux';
import store from '@/presentation/store';
import Head from 'next/head';
import Home from '@/presentation/components/layouts/Home';

const HomeLayout = () => {

  const sendMessage = () =>{
    console.log("send message")
    window.parent.postMessage("miEventoCustom", "*");
  }

  return (
    <Provider store={store}>
      <Head>
      </Head>
      <button onClick={()=>sendMessage()}>Enviar msg</button>
      <Home />
    </Provider>
  );
};
export default HomeLayout;
