import { useContext } from 'react';
import StoresContext from '../../context';
import Mobile from '@/presentation/components/layouts/Mobile';
import HeaderMobile from '../../components/header-mobile';
import CardContainerMobile from '../../components/card-container-mobile';
import { Container, StoreInformationWrapper } from './styles';
import StoreInformation from '../../components/store-information';

const StoreMobile = () => {
  const { storeFiltered } = useContext(StoresContext);

  return (
    <Mobile>
      <Container>
        <HeaderMobile />
        <StoreInformationWrapper>
          <StoreInformation />
        </StoreInformationWrapper>
        {storeFiltered?.map((store, indx) => (
          <CardContainerMobile key={indx} {...store} />
        ))}
      </Container>
    </Mobile>
  );
};

export default StoreMobile;
