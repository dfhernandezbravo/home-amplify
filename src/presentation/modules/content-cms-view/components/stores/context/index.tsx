import { StoreInfo } from '@/domain/entities/content/content.types';
import { createContext } from 'react';

interface StoresContextProps {
  stores: StoreInfo[];
  storeFiltered: StoreInfo[];
  regionSelected: string;
  neighborhoodSelected: string;
  handleFilterRegion: (value: string) => void;
  handleFilterNeighborhood: (value: string) => void;
}

const StoresContext = createContext({} as StoresContextProps);

export default StoresContext;
