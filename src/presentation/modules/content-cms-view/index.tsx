/* eslint-disable complexity */

import { ContentBody } from '@/domain/entities/content/content.types';
import ButtonToTop from '@/presentation/components/atoms/button-to-top';
import React from 'react';
import Carousel from './components/carousel';
import Cards from './components/cards';
import ShowCase from './components/show-case';
import PromotionalRibbon from './components/promotional-ribbon';
import MenuCarousel from './components/menu-carousel';
import CountdownSection from '../CountdownSection';
import InformationCard from './components/information-card';
import QuickCategories from './components/quick-categories';
import SmartBanner from './components/smart-banner';
import LegalsContent from './components/legals-content';
import Stores from './components/stores';
import LazyLoad from 'react-lazyload';

interface Props {
  content: ContentBody[];
}

const ContentCmsView = ({ content }: Props) => {
  return (
    <div className="home-mcf">
      {content?.map((element, _index) => {
        switch (element.component) {
          case 'banner-carousel':
            return (
              <LazyLoad throttle={300} height={300}>
                <Carousel key={_index} {...element} />
              </LazyLoad>
            );
          case 'cards':
            return (
              <LazyLoad throttle={300} height={300}>
                <Cards key={_index} {...element} />
              </LazyLoad>
            );
          case 'featured-products':
            return (
              <LazyLoad throttle={300} height={300}>
                <ShowCase key={_index} {...element} />
              </LazyLoad>
            );
          case 'promotional-ribbon':
            return (
              <LazyLoad throttle={300} height={300}>
                <PromotionalRibbon key={_index} {...element} />
              </LazyLoad>
            );
          case 'menu-carousel':
            return (
              <LazyLoad throttle={300} height={300}>
                <MenuCarousel key={_index} {...element} />
              </LazyLoad>
            );
          case 'banner-countdown':
            return (
              <LazyLoad throttle={300} height={300}>
                <CountdownSection key={_index} {...element} />
              </LazyLoad>
            );
          case 'information-card':
            return (
              <LazyLoad throttle={300} height={300}>
                <InformationCard key={_index} {...element} />
              </LazyLoad>
            );
          case 'quick-category':
            return (
              <LazyLoad throttle={300} height={300}>
                <QuickCategories key={_index} {...element} />
              </LazyLoad>
            );
          case 'smart-banner':
            return (
              <LazyLoad throttle={300} height={300}>
                <SmartBanner key={_index} {...element} />
              </LazyLoad>
            );
          case 'legals-content':
            return (
              <LazyLoad throttle={300} height={300}>
                <LegalsContent key={_index} {...element} />
              </LazyLoad>
            );
          case 'stores':
            return (
              <LazyLoad throttle={300} height={300}>
                <Stores key={_index} {...element} />
              </LazyLoad>
            );
          default:
            return null;
        }
      })}
      <ButtonToTop />
    </div>
  );
};

export default ContentCmsView;
