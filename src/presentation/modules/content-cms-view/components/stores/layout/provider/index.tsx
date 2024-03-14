/* eslint-disable complexity */
import { useState } from 'react';
import StoresContext from '../../context';
import {
  StoreInfo,
  StoreInformation,
  StoreServices,
} from '@/domain/entities/content/content.types';

interface Props {
  storeInfo: StoreInfo[];
  informations: StoreInformation[];
  children: React.ReactNode;
}

const StoreProvider = ({ storeInfo, informations, children }: Props) => {
  const deepCopyStoreInfo = JSON.parse(
    JSON.stringify(storeInfo),
  ) as StoreInfo[];
  const [storeFiltered, setStoreFiltered] = useState(deepCopyStoreInfo);
  const [regionSelected, setRegionSelected] = useState('');
  const [neighborhoodSelected, setNeighborhoodSelected] = useState('');
  const [storeServicesFiltered, setStoreServicesFiltered] = useState<
    StoreServices[]
  >([]);

  const handleFilterServices = (
    services: StoreServices[],
    regionvalue?: string,
    regionInfo?: StoreInfo[],
  ) => {
    setStoreServicesFiltered(services);
    const currentRegion = regionvalue || regionSelected;
    const currentStoreInfo = regionInfo || storeFiltered;

    if (
      services.length === 0 &&
      currentRegion === '' &&
      neighborhoodSelected === ''
    ) {
      return setStoreFiltered(storeInfo);
    } else if (
      services.length === 0 &&
      currentRegion !== '' &&
      neighborhoodSelected === ''
    ) {
      const copy = JSON.parse(JSON.stringify(storeInfo)) as StoreInfo[];
      const region = copy.filter((store) => store.region === currentRegion);
      return setStoreFiltered(region);
    } else if (
      services.length === 0 &&
      currentRegion !== '' &&
      neighborhoodSelected !== ''
    ) {
      const copy = JSON.parse(JSON.stringify(storeInfo)) as StoreInfo[];
      const region = copy.filter((store) => store.region === currentRegion);
      const neighborhood = region[0]?.stores.filter(
        (store) => store.neighborhood === neighborhoodSelected,
      );
      return setStoreFiltered([{ ...storeFiltered[0], stores: neighborhood }]);
    }

    const copyStoreFiltered = JSON.parse(
      JSON.stringify(currentStoreInfo),
    ) as StoreInfo[];

    const filterByServices = copyStoreFiltered.filter((region) => {
      region.stores = region.stores.filter((store) => {
        const serviceMatched = store.services.filter((service) =>
          services.some(({ label }) => label === service.name),
        );
        return serviceMatched.length > 0;
      });
      return region.stores.length > 0;
    });
    setStoreFiltered(filterByServices);
  };

  const handleFilterRegion = (regionValue: string) => {
    const region = storeInfo.filter((store) => store.region === regionValue);
    setStoreFiltered(region);
    handleFilterServices(storeServicesFiltered, regionValue, region);
    setRegionSelected(regionValue);
    setNeighborhoodSelected('');
  };

  const handleFilterNeighborhood = (value: string) => {
    const region = storeInfo.filter((store) => store.region === regionSelected);
    const neighborhood = region[0]?.stores.filter(
      (store) => store.neighborhood === value,
    );
    const regionFiltered = [{ ...storeFiltered[0], stores: neighborhood }];
    handleFilterServices(storeServicesFiltered, regionSelected, regionFiltered);
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
        handleFilterServices,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
};

export default StoreProvider;
