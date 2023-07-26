import { CountdownStruct } from './../../presentation/modules/CountdownSection/CountdownSection.types';
import { FeaturedCategoriesStruct } from './../../presentation/modules/FeaturedCategories/FeaturedCategories.types';
import { CalugaStruct } from './../../presentation/modules/Calugas/Calugas.types';
import { CarouselStruct } from './../../presentation/modules/Carousel/Carousel.types';
import { EventRibbonStruct } from './../../presentation/modules/EventRibbon/EventRibbon.types';
import FeaturedCategories from '@/presentation/modules/FeaturedCategories';
import Categories from '@/presentation/modules/Categories';
import ProductCarousel from '@/presentation/modules/ProductsCarousel';
import Calugas from '@/presentation/modules/Calugas';
import EventRibbon from '@/presentation/modules/EventRibbon';
import Carousel from '@/presentation/modules/Carousel';
import CountdownSection from '@/presentation/modules/CountdownSection';

type R<P = {}> = React.FC<P>;
interface ContentObjectStruct {
  [key: string]: 
    | R<EventRibbonStruct>
    | R<CarouselStruct>
    | R<CalugaStruct>
    | R<FeaturedCategoriesStruct>
    | R<CountdownStruct>
    | R; 
}

const Content: ContentObjectStruct = {
  'event-ribbon': EventRibbon,
  'banner-carousel': Carousel,
  'calugas': Calugas,
  'carrousel-products': ProductCarousel,
  'menu-carrousel': Categories,
  'featured-categories': FeaturedCategories,
  'vitrina-productos': ProductCarousel,
  'banner-countdown': CountdownSection
};

export default Content;
