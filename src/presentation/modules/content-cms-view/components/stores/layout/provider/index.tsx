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

const deepCopy = (obj: object) => JSON.parse(JSON.stringify(obj));

const StoreProvider = ({ storeInfo, informations, children }: Props) => {
  const deepCopyStoreInfo = deepCopy(storeInfo) as StoreInfo[];
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
      const copyStoreInfo = deepCopy(storeInfo) as StoreInfo[];
      const region = copyStoreInfo.filter(
        (store) => store.region === currentRegion,
      );
      return setStoreFiltered(region);
    } else if (
      services.length === 0 &&
      currentRegion !== '' &&
      neighborhoodSelected !== ''
    ) {
      const copyStoreInfo = deepCopy(storeInfo) as StoreInfo[];
      const region = copyStoreInfo.filter(
        (store) => store.region === currentRegion,
      );
      const neighborhood = region[0]?.stores.filter(
        (store) => store.neighborhood === neighborhoodSelected,
      );
      return setStoreFiltered([{ ...storeFiltered[0], stores: neighborhood }]);
    }

    const copyStoreFiltered = deepCopy(currentStoreInfo) as StoreInfo[];
    const filterByServices = copyStoreFiltered.filter((region) => {
      return (region.stores = region.stores.filter((store) => {
        return services.every((serviceSelected) =>
          store.services
            .map((serv) => serv.name)
            .includes(serviceSelected.label),
        );
      }));
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
        storeServicesFiltered,
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
