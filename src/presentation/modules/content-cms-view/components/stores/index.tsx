import Header from './components/header';

import getContentEvent from '@/domain/use-cases/content/get-content-event';
import { Container } from './styles';
// import { setStore } from '@/presentation/store/stores';
import CardContainer from './components/card-container';
import { ContentBody } from '@/domain/entities/content/content.types';
import { GetServerSideProps } from 'next';
import StoresContext from './context';
import { useState } from 'react';

interface PageProps {
  content: ContentBody[] | null;
}

export const getServerSideProps = (async () => {
  try {
    const content = await getContentEvent('store');
    return { props: { content } };
  } catch (error) {
    return { props: { content: null } };
  }
}) satisfies GetServerSideProps<PageProps>;

const Stores = ({ storeInfo }: ContentBody) => {
  const [storeFiltered, setStoreFiltered] = useState(storeInfo);
  const [regionSelected, setRegionSelected] = useState('');
  const [neighborhoodSelected, setNeighborhoodSelected] = useState('');

  const handleFilterRegion = (value: string) => {
    setStoreFiltered(storeInfo?.filter((store) => store.region === value));
    setRegionSelected(value);
    setNeighborhoodSelected('');
  };

  const handleFilterNeighborhood = (value: string) => {
    // const region = storeInfo[0]?.stores.filter((store) => store.neighborhood === value);
    const region = storeInfo.filter((store) => store.region === regionSelected);
    const neighborhood = region[0]?.stores.filter(
      (store) => store.neighborhood === value,
    );
    setStoreFiltered([{ ...storeFiltered[0], stores: neighborhood }]);
    setNeighborhoodSelected(value);
  };

  return (
    <StoresContext.Provider
      value={{
        stores: storeInfo,
        storeFiltered,
        regionSelected,
        neighborhoodSelected,
        handleFilterRegion,
        handleFilterNeighborhood,
      }}
    >
      <Header />
      <Container>
        {storeFiltered?.map((store, indx) => (
          <CardContainer key={indx} {...store} />
        ))}
      </Container>
    </StoresContext.Provider>
  );
};

export default Stores;
