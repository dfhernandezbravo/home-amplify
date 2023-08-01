import '@/presentation/assets/styles/globals.css';
import { themeStyled } from '@/presentation/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeStyled}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
