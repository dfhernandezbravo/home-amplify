import { Provider } from 'react-redux';
import store from '@/presentation/store';
import PrivateLanding from './PrivateLanding';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@cencosud-ds/easy-design-system';

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
        <ThemeProvider>
          <PrivateLanding />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Private;
