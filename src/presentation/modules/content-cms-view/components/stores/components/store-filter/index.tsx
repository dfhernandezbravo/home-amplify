/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import StoresContext from '../../context';
import Select from '@/presentation/components/atoms/select';
import { Container, SelectContainer } from './styles';
import SelectWithCheckbox from '@/presentation/components/atoms/select-with-checkbox';
import { OptionsSelect } from '@ccom-easy-design-system/atoms.select/types';

//TODO: create services' type in CMS

const servicesType = [
  'Centro de mesa',
  'Patio de construcción',
  'Dimensionado de maderas',
  'Dimensionado de alfombras',
  'Corte de perfiles',
  'Producto pedido',
  'Venta empresa',
  'Punto de reciclaje',
];

const StoreFilter = () => {
  const {
    stores,
    regionSelected,
    handleFilterRegion,
    handleFilterNeighborhood,
    handleFilterServices,
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
          label="Región"
          options={regions}
          onChange={(e) => {
            const event = e as OptionsSelect;
            const value = event.value as string;
            handleFilterRegion(value);
          }}
        />
      </SelectContainer>
      <SelectContainer>
        <Select
          fullwidth={true}
          label="Comuna"
          options={neighborhoods}
          disabled={!regionSelected}
          onChange={(e) => {
            const event = e as OptionsSelect;
            const value = event.value as string;
            handleFilterNeighborhood(value);
          }}
        />
      </SelectContainer>
      <SelectContainer>
        <SelectWithCheckbox
          fullwidth={true}
          label="Servicios"
          options={servicesType}
          onChange={(e) => handleFilterServices(e as any)}
        />
      </SelectContainer>
    </Container>
  );
};

export default StoreFilter;
