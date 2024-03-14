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

interface Props {
  content: ContentBody[];
}

const ContentCmsView = ({ content }: Props) => {
  return (
    <div className="home-mcf">
      {content?.map((element, _index) => {
        switch (element.component) {
          case 'banner-carousel':
            return <Carousel key={_index} {...element} />;
          case 'cards':
            return <Cards key={_index} {...element} />;
          case 'showcase':
            return <ShowCase key={_index} {...element} />;
          case 'promotional-ribbon':
            return <PromotionalRibbon key={_index} {...element} />;
          case 'menu-carousel':
            return <MenuCarousel key={_index} {...element} />;
          case 'banner-countdown':
            return <CountdownSection key={_index} {...element} />;
          case 'information-card':
            return <InformationCard key={_index} {...element} />;
          case 'quick-category':
            return <QuickCategories key={_index} {...element} />;
          case 'smart-banner':
            return <SmartBanner key={_index} {...element} />;
          case 'legals-content':
            return <LegalsContent key={_index} {...element} />;
          case 'stores':
            return <Stores key={_index} {...element} />;
          default:
            return null;
        }
      })}
      <ButtonToTop />
    </div>
  );
};

export default ContentCmsView;
