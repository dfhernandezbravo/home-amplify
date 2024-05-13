import '@/presentation/assets/styles/globals.css';
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';
import store from '@/presentation/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};
export default App;
