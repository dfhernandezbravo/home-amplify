import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/presentation/store';
import Home from '@/presentation/components/layouts/Home';
import { themeStyled } from '@/presentation/theme';
import { ThemeProvider } from 'styled-components';

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

  return (
    <ThemeProvider theme={themeStyled}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
};
export default HomeLayout;
