import { useContext } from 'react';
import StoresContext from '../../context';
import Desktop from '@/presentation/components/layouts/Desktop';
import Header from '../../components/header';
import CardContainer from '../../components/card-container';
import { Container } from './styles';
import StoreInformation from '../../components/store-information';

const StoreDesktop = () => {
  const { storeFiltered } = useContext(StoresContext);

  return (
    <Desktop>
      <Header />
      <Container>
        <StoreInformation />
        {storeFiltered?.map((store, indx) => (
          <CardContainer key={indx} {...store} />
        ))}
      </Container>
    </Desktop>
  );
};

export default StoreDesktop;
