import FeaturedCategories from '@/presentation/modules/FeaturedCategories';
import Categories from '@/presentation/modules/Categories';
import ProductCarousel from '@/presentation/modules/ProductsCarousel';
import Calugas from '@/presentation/modules/Calugas';
import EventRibbon from '@/presentation/modules/EventRibbon';
import Carousel from '@/presentation/modules/Carousel';

const Content: any = {
  'event-ribbon': EventRibbon,
  'banner-carousel': Carousel,
  calugas: Calugas,
  'carrousel-products': ProductCarousel,
  'menu-carrousel': Categories,
  'featured-categories': FeaturedCategories,
  'vitrina-productos': ProductCarousel,
};

export default Content;
