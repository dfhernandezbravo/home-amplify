/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable complexity */
import { ContentBody } from '@/domain/entities/content/content.types';
import ButtonToTop from '@/presentation/components/atoms/button-to-top';
//import { useTimeValidator } from '@/presentation/hooks/useTimeValidator';
import React from 'react';
//import ContentComponent from './components';
import Carousel from './components/carousel';
import Cards from './components/cards';
import AwsPersonalize from '../aws-personalize';
import ShowCase from './components/show-case';
import PromotionalRibbon from './components/promotional-ribbon';
import MenuCarousel from './components/menu-carousel';
import CountdownSection from '../CountdownSection';
import InformationCard from './components/information-card';
import QuickCategories from './components/quick-categories';
import SmartBanner from './components/smart-banner';

interface Props {
  content: ContentBody[];
}

const ContentCmsView = ({ content }: Props) => {
  /*  const ComponentRender = (element: ContentBody) => {
    const { component, isActive, endDate, startDate } = element;
    const enabledTime = useTimeValidator({
      startDate,
      endDate,
      isActive,
    });
    const Component = ContentComponent[component];
    if(typeof window !== 'undefined') return Element ? enabledTime ? <Component {...element} /> : null : null;
    else return null
  };
  //<div key={`${element.component}${index}`}></div>
  //  <ComponentRender {...element} />
*/

  return (
    <div className="home-mcf">
      {content?.map((element, _index) => {
        switch (element.component) {
          case 'banner-carousel':
            return <Carousel key={_index} {...element} />;
          case 'cards':
            return <Cards key={_index} {...element} />;
          //case 'aws-personalize':
          //return <AwsPersonalize key={_index} {...element}/>;
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
          default:
            return <h1 key={_index}>Easy - Renueva el amor por el hogar</h1>;
        }
      })}
      <ButtonToTop />
    </div>
  );
};

export default ContentCmsView;
