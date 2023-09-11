import { Provider } from 'react-redux';
import store from '@/presentation/store';
import PrivateLanding from './PrivateLanding';
import { themeStyled } from '@/presentation/theme';
import { ThemeProvider } from 'styled-components';

const Private = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeStyled}>
        <PrivateLanding />
      </ThemeProvider>
    </Provider>
  );
};

export default Private;
