import { CountdownStruct } from './../../presentation/modules/CountdownSection/CountdownSection.types';
import { FeaturedCategoriesStruct } from './../../presentation/modules/FeaturedCategories/FeaturedCategories.types';
import { CalugaStruct } from './../../presentation/modules/Calugas/Calugas.types';
import { CarouselStruct } from './../../presentation/modules/Carousel/Carousel.types';
import { EventRibbonStruct } from './../../presentation/modules/EventRibbon/EventRibbon.types';
import FeaturedCategories from '@/presentation/modules/FeaturedCategories';
import ProductCarousel from '@/presentation/modules/ProductsCarousel';
import Calugas from '@/presentation/modules/Calugas';
import EventRibbon from '@/presentation/modules/EventRibbon';
import Carousel from '@/presentation/modules/Carousel';
import CountdownSection from '@/presentation/modules/CountdownSection';
import { ProductCarouselStruct } from '@/presentation/modules/ProductsCarousel/ProductCarousel.types';
import InformationCard from '@/presentation/modules/InformationCard';
import { CategoriesStruct } from '@/presentation/modules/Categories/Categories.types';
import { InformationCardStruct } from '@/presentation/modules/InformationCard/InformationCard.types';
import Categories from '@/presentation/modules/Categories';

type R<P = {}> = React.FC<P>;
interface ContentObjectStruct {
  [key: string]:
    | R<EventRibbonStruct>
    | R<ProductCarouselStruct>
    | R<CarouselStruct>
    | R<CalugaStruct>
    | R<CategoriesStruct>
    | R<FeaturedCategoriesStruct>
    | R<InformationCardStruct>
    | R<CountdownStruct>
    | R;
}

const Content: ContentObjectStruct = {
  'promotional-ribbon': EventRibbon,
  'banner-carousel': Carousel,
  'cards': Calugas,
  'showcase': ProductCarousel,
  'menu-carousel': Categories,
  'featured-categories': FeaturedCategories,
  'vitrina-productos': ProductCarousel,
  'banner-countdown': CountdownSection,
  'information-card': InformationCard
};

export default Content;
