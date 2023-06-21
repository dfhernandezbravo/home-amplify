import { FeaturedCategoriesStruct } from './../../presentation/modules/FeaturedCategories/FeaturedCategories.types';
import { CalugaStruct } from './../../presentation/modules/Calugas/Calugas.types';
import { EventRibbonStruct } from './../../presentation/modules/EventRibbon/EventRibbon.types';
export interface ContentStruct {
  eventName: string;
  viewName: string;
  content?: (
    EventRibbonStruct |
    CalugaStruct |
    FeaturedCategoriesStruct)
}