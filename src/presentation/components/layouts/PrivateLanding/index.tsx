import { Provider } from 'react-redux';
import store from '@/presentation/store';
import PrivateLanding from './PrivateLanding';

const Private = () => {
  return (
    <Provider store={store}>
      <PrivateLanding />
    </Provider>
  );
};

export default Private;
