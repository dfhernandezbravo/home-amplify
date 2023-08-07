/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';
import {
  FeaturedCategoriesStruct,
  ItemStruct,
} from './FeaturedCategories.types';
import { Container, ItemContainer } from './FeaturedCategories.styles';
import { IsMobile } from '@/presentation/hooks/utils';
import CarouselCategories from './CarouselCategories';
import Title from '@/presentation/components/atoms/Title';
import useLinks from '@/presentation/hooks/useLink';

const FeaturedCategories = (props: FeaturedCategoriesStruct) => {
  const { items } = props;
  const halfItems = Math.floor(items.length / 2);

  const firstHalf: ItemStruct[] = items.slice(0, halfItems);
  const secondHalf: ItemStruct[] = items.slice(halfItems);
  const { getLink, sendEvent } = useLinks();

  return (
    <Container>
      {IsMobile() ? (
        <Fragment>
          <Title text={props.title} />
          <CarouselCategories items={firstHalf} />
          <CarouselCategories items={secondHalf} />
        </Fragment>
      ) : (
        <Fragment>
          <Title text={props.title} />
          {items &&
            items.map((item: ItemStruct, index: number) => (
              <ItemContainer key={`gallery_item_${index}`}>
                <Link
                  href={getLink(item.link)}
                  onClick={() => sendEvent(item.link)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    sizes="100vw"
                  />
                </Link>
              </ItemContainer>
            ))}
        </Fragment>
      )}
    </Container>
  );
};

export default FeaturedCategories;
