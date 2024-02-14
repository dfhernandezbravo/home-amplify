import React from 'react';
import { themeEasy } from '@cencosud-ds/easy-design-system';
import { ThemeProvider } from 'styled-components';
import StoreProvider from '@/store/StoreProvider';
import { QueryClientProvider, QueryClient } from 'react-query';

const ConfigsProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ThemeProvider theme={themeEasy}>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default ConfigsProvider;
