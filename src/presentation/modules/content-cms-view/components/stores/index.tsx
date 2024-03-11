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

  const handleFilter = (value: string) => {
    console.log(value);
    setStoreFiltered(storeInfo?.filter((store) => store.region === value));
  };

  return (
    <StoresContext.Provider
      value={{
        stores: storeInfo,
        storeFiltered,
        handleFilter,
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
