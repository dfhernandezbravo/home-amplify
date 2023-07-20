import { Provider } from 'react-redux';
import store from '@/presentation/store';
import Landing from './Landing';

const Landings = () => {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  )
}

export default Landings