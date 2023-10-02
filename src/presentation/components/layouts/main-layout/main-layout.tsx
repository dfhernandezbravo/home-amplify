import { titlePageAnalytics } from '@/domain/env/analytics/title-page';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import store from '@/presentation/store';
import { themeStyled } from '@/presentation/theme';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import CartEventLayout from './cart-event-layout';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainLayout = ({ children }: Props) => {
  const {
    methods: { sendPageviewVirtualEvent },
  } = useAnalytics();
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    sendPageviewVirtualEvent({
      event: 'pageViewVirtual',
      location: window.location.origin,
      page: asPath,
      title: titlePageAnalytics[pathname],
      version: 'Home headless',
    });
  }, [asPath, pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeStyled}>
        <Provider store={store}>
          <CartEventLayout>{children}</CartEventLayout>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MainLayout;
