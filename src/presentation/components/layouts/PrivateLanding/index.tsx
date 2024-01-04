import { Provider } from 'react-redux';
import store from '@/presentation/store';
import PrivateLanding from './PrivateLanding';
import { themeStyled } from '@/presentation/theme';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Private = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={themeStyled}>
          <PrivateLanding />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Private;
