import { useState } from 'react';
import StoresContext from '../../context';
import {
  StoreInfo,
  StoreInformation,
} from '@/domain/entities/content/content.types';
import StoreDesktop from '../desktop';
import StoreMobile from '../mobile';

interface Props {
  storeInfo: StoreInfo[];
  informations: StoreInformation[];
}

const StoreProvider = ({ storeInfo, informations }: Props) => {
  const [storeFiltered, setStoreFiltered] = useState(storeInfo);
  const [regionSelected, setRegionSelected] = useState('');
  const [neighborhoodSelected, setNeighborhoodSelected] = useState('');

  const handleFilterRegion = (value: string) => {
    setStoreFiltered(storeInfo?.filter((store) => store.region === value));
    setRegionSelected(value);
    setNeighborhoodSelected('');
  };

  const handleFilterNeighborhood = (value: string) => {
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
        storeInformation: informations,
        stores: storeInfo,
        storeFiltered,
        regionSelected,
        neighborhoodSelected,
        handleFilterRegion,
        handleFilterNeighborhood,
      }}
    >
      <StoreDesktop />
      <StoreMobile />
    </StoresContext.Provider>
  );
};

export default StoreProvider;
