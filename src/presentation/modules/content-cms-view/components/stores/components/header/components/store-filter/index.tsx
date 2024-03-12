// import Select from "@/presentation/components/atoms/select"
import { useContext } from 'react';
import StoresContext from '../../../../context';
import Select from '@/presentation/components/atoms/select';
import { Container, SelectContainer } from './styles';

const StoreFilter = () => {
  const {
    stores,
    regionSelected,
    handleFilterRegion,
    handleFilterNeighborhood,
  } = useContext(StoresContext);

  const regions = stores?.map((store) => store.region);
  const neighborhoods = stores
    .filter((store) => store.region === regionSelected)
    .map((store) => store.stores)
    .flat()
    .map((store) => store.neighborhood);

  return (
    <Container>
      <SelectContainer>
        <Select
          fullwidth={true}
          label="Region"
          options={regions}
          onChange={(e) => handleFilterRegion(e.value)}
        />
      </SelectContainer>
      <SelectContainer>
        <Select
          fullwidth={true}
          label="Comuna"
          options={neighborhoods}
          disabled={!regionSelected}
          onChange={(e) => handleFilterNeighborhood(e.value)}
        />
      </SelectContainer>
    </Container>
  );
};

export default StoreFilter;
