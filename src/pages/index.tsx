import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/presentation/store';
import Home from '@/presentation/components/layouts/Home';

const HomeLayout = () => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      window.parent.postMessage(
        { WINDOW_HEIGHT: entries[0].target.scrollHeight },
        '*',
      );
    });
    resizeObserver.observe(document.body);
  }, []);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const key = Object.keys(event?.data);
      if (key?.length > 0 && key[0] === 'INTEGRACION') {
        localStorage.setItem('isHybridation', event.data.INTEGRACION);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
};
export default HomeLayout;
