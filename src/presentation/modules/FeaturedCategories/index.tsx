import { Fragment  } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturedCategoriesStruct, ItemStruct } from './FeaturedCategories.types';
import {
  Container,
  ItemContainer,
} from './FeaturedCategories.styles';
import { IsMobile } from '@/presentation/hooks/utils';
import CarouselCategories from './CarouselCategories';

const FeaturedCategories = (props: FeaturedCategoriesStruct) => {
  const { items } = props;
  const halfItems = Math.floor(items.length / 2);

  const firstHalf: FeaturedCategoriesStruct['items'] = items.slice(0, halfItems);
  const secondHalf: FeaturedCategoriesStruct['items'] = items.slice(halfItems);
 
  return (
    <Container>
      { IsMobile() ? (
        <Fragment>
          <CarouselCategories items = {firstHalf} />
          <CarouselCategories items={secondHalf} />
        </Fragment>
      ) : (
        items &&
        items.map((item: ItemStruct, index: number) => (
          <ItemContainer key={`gallery_item_${index}`}>
            <Link href={item.link}>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                sizes="100vw"
              />
            </Link>
          </ItemContainer>
        ))
      )}
    </Container>
  );
};

export default FeaturedCategories;
