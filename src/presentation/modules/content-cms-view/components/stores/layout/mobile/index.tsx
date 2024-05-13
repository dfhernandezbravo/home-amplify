import { useContext } from 'react';
import StoresContext from '../../context';
import Mobile from '@/presentation/components/layouts/Mobile';
import HeaderMobile from '../../components/header-mobile';
import CardContainerMobile from '../../components/card-container-mobile';
import { Container, StoreInformationWrapper } from './styles';
import StoreInformation from '../../components/store-information';
import ServicesSelected from '../../components/services-selected';

const StoreMobile = () => {
  const { storeFiltered } = useContext(StoresContext);

  return (
    <Mobile>
      <Container>
        <HeaderMobile />
        <ServicesSelected />
        <StoreInformationWrapper>
          <StoreInformation />
        </StoreInformationWrapper>
        {storeFiltered?.map((store, indx) => (
          <CardContainerMobile key={`${store?.region}-${indx}`} {...store} />
        ))}
      </Container>
    </Mobile>
  );
};

export default StoreMobile;
