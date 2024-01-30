import Landing from './Landing';
import { Container } from './Landing.styles';
import MainLayout from '../main-layout/main-layout';

const Landings = () => {
  return (
    <MainLayout>
      <Container>
        <Landing />
      </Container>
    </MainLayout>
  );
};

export default Landings;
