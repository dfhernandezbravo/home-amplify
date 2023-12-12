import '@/presentation/assets/styles/globals.css';
import store from '@/presentation/store';
import { themeStyled } from '@/presentation/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Easy.cl - Renueva el amor por tu hogar</title>
        <meta name="description" content="Easy CL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main>
        <ThemeProvider theme={themeStyled}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </main>
    </>
  );
};
export default App;
