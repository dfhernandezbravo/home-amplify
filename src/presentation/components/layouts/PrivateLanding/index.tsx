import { Provider } from 'react-redux';
import store from '@/presentation/store';
import PrivateLanding from './PrivateLanding';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EasyThemeProvider } from '@ccom-easy-design-system/theme.theme-provider';

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
        <EasyThemeProvider>
          <PrivateLanding />
        </EasyThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Private;
