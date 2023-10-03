import { ComponentsCMS } from '@/domain/entities/content/content.types';
import Carousel from './components/carousel';
import Cards from './components/cards';
import AwsPersonalize from '../aws-personalize';
import ProductsCarousel from './components/products-carousel';
import EventRibbon from '../EventRibbon';
import Categories from '../Categories';
import FeaturedCategories from '../FeaturedCategories';
import CountdownSection from '../CountdownSection';
import InformationCard from '../InformationCard';
import QuickCategory from '../QuickCategory';
import SmartBanner from '../SmartBanner';

const ContentComponent: ComponentsCMS = {
  'banner-carousel': Carousel,
  cards: Cards,
  'aws-personalize': AwsPersonalize,
  showcase: ProductsCarousel,
  'promotional-ribbon': EventRibbon,
  'menu-carousel': Categories,
  'featured-categories': FeaturedCategories,
  'vitrina-productos': ProductsCarousel,
  'banner-countdown': CountdownSection,
  'information-card': InformationCard,
  'quick-category': QuickCategory,
  'smart-banner': SmartBanner,
};

export default ContentComponent;
