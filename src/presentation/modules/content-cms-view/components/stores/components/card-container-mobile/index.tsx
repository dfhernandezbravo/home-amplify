import Image from 'next/image';
import { StoreInfo } from '@/domain/entities/content/content.types';
import Schedules from '../schedules';
import MapLink from '../map-link';
import { ContainerMobile, WrapperCardContainerMobile } from './styles';

const CardContainerMobile = (props: StoreInfo) => {
  return (
    <WrapperCardContainerMobile>
      {props.stores.map((store, index) => {
        return (
          <ContainerMobile key={index}>
            <div className="inner-mobile--container">
              <p className="neighborhood-title">{store.name}</p>
              <p className="address">{store.address}</p>
              <Schedules {...store} />
              <MapLink link={store.mapLink} />
            </div>
            <div className="services-mobile--wrapper">
              <strong>Servicios:</strong>
              {store.services.map((service, index) => {
                return (
                  <div key={index} className="services-mobile--container">
                    <Image
                      src={service.image}
                      width={16}
                      height={16}
                      alt={service.name}
                    />
                    <p className="service-name">{service.name}</p>
                  </div>
                );
              })}
            </div>
          </ContainerMobile>
        );
      })}
    </WrapperCardContainerMobile>
  );
};

export default CardContainerMobile;
