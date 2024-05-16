import { useContext } from 'react';
import Image from 'next/image';
import StoresContext from '../../context';
import { ServiceLabel, ServicesSelectedContainer } from './styles';

const ServicesSelected = () => {
  const { storeServicesFiltered } = useContext(StoresContext);

  const removeService = (service: string) => {
    console.log('removeService', service);
  };

  if (!storeServicesFiltered?.length) {
    return null;
  }

  return (
    <ServicesSelectedContainer>
      {storeServicesFiltered?.map((service, indx) => {
        return (
          <ServiceLabel key={indx}>
            <Image
              onClick={() => removeService(service.label)}
              src="/icons/general/close-icon.svg"
              alt="close-icon"
              width={15}
              height={15}
            />
            <span>{service.label}</span>
          </ServiceLabel>
        );
      })}
    </ServicesSelectedContainer>
  );
};

export default ServicesSelected;
