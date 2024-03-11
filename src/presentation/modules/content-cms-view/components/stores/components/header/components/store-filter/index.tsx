// import Select from "@/presentation/components/atoms/select"
import { useContext } from 'react';
import StoresContext from '../../../../context';
import Select from '@/presentation/components/atoms/select';

const StoreFilter = () => {
  const { stores, handleFilter } = useContext(StoresContext);

  console.log('stores', stores);

  const regions = stores?.map((store) => store.region);

  return (
    <div>
      <Select
        label="Region"
        options={regions}
        onChange={(e) => handleFilter(e.value)}
      />
    </div>
  );
};

export default StoreFilter;
