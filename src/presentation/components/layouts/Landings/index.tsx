import { Provider } from 'react-redux';
import store from '@/presentation/store';
import Landing from './Landing';
import { Container } from './Landing.styles';

const Landings = () => {
  return (
    <Provider store={store}>
      <Container>
        <Landing />
      </Container>
    </Provider>
  );
};

export default Landings;
