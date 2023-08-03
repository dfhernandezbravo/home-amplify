
import { Provider } from 'react-redux';
import store from '@/presentation/store';
import PrivateWorkspace from './PrivateWorkspace';

const Private = () => {
  return (
    <Provider store={store}>
        <PrivateWorkspace />
    </Provider>
  );
};

export default Private;
