import { StoreInfo } from '@/domain/entities/content/content.types';
import { createContext } from 'react';

interface StoresContextProps {
  stores: StoreInfo[];
  storeFiltered: StoreInfo[];
  handleFilter: (value: string) => void;
}

const StoresContext = createContext({} as StoresContextProps);

export default StoresContext;
