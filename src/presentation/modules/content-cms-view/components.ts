import { ComponentsCMS } from '@/domain/entities/content/content.types';
import Categories from '../Categories';
import CountdownSection from '../CountdownSection';
import EventRibbon from '../EventRibbon';
import FeaturedCategories from '../FeaturedCategories';
import InformationCard from '../InformationCard';
import QuickCategory from '../QuickCategory';
import SmartBanner from '../SmartBanner';
import AwsPersonalize from '../aws-personalize';
import Cards from './components/cards';
import Carousel from './components/carousel';
import ShowCase from './components/show-case';

const ContentComponent: ComponentsCMS = {
  'banner-carousel': Carousel,
  cards: Cards,
  'aws-personalize': AwsPersonalize,
  showcase: ShowCase,
  'promotional-ribbon': EventRibbon,
  'menu-carousel': Categories,
  'featured-categories': FeaturedCategories,
  'banner-countdown': CountdownSection,
  'information-card': InformationCard,
  'quick-category': QuickCategory,
  'smart-banner': SmartBanner,
};

export default ContentComponent;
