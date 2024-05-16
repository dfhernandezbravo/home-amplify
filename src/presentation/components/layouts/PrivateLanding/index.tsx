import { Provider } from 'react-redux';
import store from '@/presentation/store';
import PrivateLanding from './PrivateLanding';
import { QueryClient, QueryClientProvider } from 'react-query';
import dynamic from 'next/dynamic';

const EasyThemeProvider = dynamic(
  () =>
    import('@ccom-easy-design-system/theme.theme-provider').then(
      (module) => module.EasyThemeProvider,
    ),
  { ssr: false },
);

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
