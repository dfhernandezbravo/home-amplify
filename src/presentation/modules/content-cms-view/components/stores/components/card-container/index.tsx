// import { useAppSelector } from "@/presentation/hooks/storeHooks"
import Address from '../address';
import Schedules from '../schedules';
import AvailableServices from '../available-services';
import NeighborhoodTitle from '../neighborhood-title';
import { InnerContainer, OuterContainer, Wrapper } from './styles';
import MapLink from '../map-link';
import { StoreInfo } from '@/domain/entities/content/content.types';

const CardContainer = (props: StoreInfo) => {
  return (
    <div>
      {props.stores.map((store) => {
        return (
          <>
            <NeighborhoodTitle title={store.neighborhood} />
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
          </>
        );
      })}
    </div>
  );
};

export default CardContainer;
