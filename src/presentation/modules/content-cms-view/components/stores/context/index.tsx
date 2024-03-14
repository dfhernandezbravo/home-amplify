import {
  StoreInfo,
  StoreInformation,
  StoreServices,
} from '@/domain/entities/content/content.types';
import { createContext } from 'react';

interface StoresContextProps {
  stores: StoreInfo[];
  storeFiltered: StoreInfo[];
  regionSelected: string;
  neighborhoodSelected: string;
  storeInformation: StoreInformation[];
  handleFilterRegion: (value: string) => void;
  handleFilterNeighborhood: (value: string) => void;
  handleFilterServices: (values: StoreServices[]) => void;
}

const StoresContext = createContext({} as StoresContextProps);

export default StoresContext;
