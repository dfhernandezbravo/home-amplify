import Address from '../address';
import Schedules from '../schedules';
import AvailableServices from '../available-services';
import { InnerContainer, OuterContainer, Wrapper } from './styles';
import MapLink from '../map-link';
import { flatedStoreContent } from '@/domain/entities/content/content.types';
import { Fragment } from 'react';

const CardContainer = (store: flatedStoreContent) => {
  return (
    <div>
      <Fragment key={`${store?.name}-card`}>
        <Wrapper>
          <OuterContainer>
            <InnerContainer>
              <Address name={store.name} address={store.address} />
              <Schedules {...store} />
            </InnerContainer>
            <MapLink link={store.mapLink} />
          </OuterContainer>
          <AvailableServices services={store.services} />
        </Wrapper>
      </Fragment>
    </div>
  );
};

export default CardContainer;
