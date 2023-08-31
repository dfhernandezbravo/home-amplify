import AwsPersonalize from '@/presentation/modules/AwsPersonalize';
import Cards from '@/presentation/modules/Calugas';
import Carousel from '@/presentation/modules/Carousel';
import Categories from '@/presentation/modules/Categories';
import CountdownSection from '@/presentation/modules/CountdownSection';
import EventRibbon from '@/presentation/modules/EventRibbon';
import FeaturedCategories from '@/presentation/modules/FeaturedCategories';
import InformationCard from '@/presentation/modules/InformationCard';
import ProductCarousel from '@/presentation/modules/ProductsCarousel';
import QuickCategory from '@/presentation/modules/QuickCategory';
import { ContentBody } from './content/content.types';

type R<P = {}> = React.FC<P>;
interface ContentObjectStruct {
  [key: string]: R<ContentBody>;
}

const ContentComponent: ContentObjectStruct = {
  'promotional-ribbon': EventRibbon,
  'banner-carousel': Carousel,
  cards: Cards,
  showcase: ProductCarousel,
  'menu-carousel': Categories,
  'featured-categories': FeaturedCategories,
  'vitrina-productos': ProductCarousel,
  'banner-countdown': CountdownSection,
  'information-card': InformationCard,
  'quick-category': QuickCategory,
  'aws-personalize': AwsPersonalize,
};

export default ContentComponent;
