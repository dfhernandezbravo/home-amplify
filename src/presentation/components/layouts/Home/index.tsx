import React, { useCallback, useEffect } from 'react';
import { Container } from './Home.styles';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';

import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useSmartBannerTime from '@/presentation/hooks/useSmartBannerTime';

import SectionCencosud from '@/presentation/modules/SectionCencosud';

import Content from '@/domain/entities/content';
import { getContent } from '@/domain/use-cases/content';
import { ContentStruct } from '@/domain/interfaces/Content.types';

const Home = () => {
  const dispatch = useAppDispatch();

  const { content, loadingContent } = useAppSelector((state) => state.content);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  const { isXs, isSm } = useBreakpoints();
  const showSmartBanner = useSmartBannerTime(new Date().getTime());

  type ComponentStruct<T> = {
    element: T;
  };

  const Component = useCallback(<T,>(element: ComponentStruct<T> | any) => {
    const componentName = element?.component;
    const Element = Content[`${componentName}`];
    return Element ? <Element {...element} /> : <></>;
  }, []);

  return (
    <Container>
      {content?.content?.length > 0 &&
        content?.content?.map((content: ContentStruct, index: number) => (
          <Component {...content} key={index} />
        ))}
      <SectionCencosud />
    </Container>
  );
};
export default Home;

// {viewData?.content &&
//   viewData.content.map((content, index) => {
//     switch (content.component) {

//       case 'cinta-texto': {
//         return (
//           <Huincha
//             key={`home_content_${index}`}
//             imageDesktop={content['image-desktop']}
//             imageMobile={content['image-mobile']}
//             alt={content.alt}
//             link={content.link}
//           />
//         );
//       }

//       case 'carrousel-home': {
//         return (
//           <Carousel
//             key={`home_content_${index}`}
//             items={content.items || []}
//             itemsPerRow={
//               (typeof content.itemsPerRow === 'string'
//                 ? Number.parseInt(content.itemsPerRow)
//                 : content.itemsPerRow) || 1
//             }
//             styles={{
//               padding: content.width === 100 ? '0' : '0 1rem',
//               maxWidth:
//                 content.width === 100 ? '100%' : `${content.width}rem`,
//             }}
//           />
//         );
//       }

//       case 'calugas-home': {
//         return (
//           <Container key={`home_caluga_${index}`}>
//             <Title text={content.title} />
//             <Calugas items={content.itemsCaluga} />
//           </Container>
//         );
//       }

//       case 'countdown-promo': {
//         return onDate(content.endDate || '') ? null : (
//           <Container key={`home_content_${index}`}>
//             <Title text="Decora y ahorra con estos productos" />
//             <CountdownSection
//               endDate={content.endDate as string}
//               startDate={content.startDate as string}
//               highlightedText={content.highlightedText}
//               showIcon={content.showIcon}
//               icon={content.icon}
//               content={<></>}
//             />
//           </Container>
//         );
//       }

//       case 'galeria-home': {
//         return (
//           <Container key={`home_content_${index}`}>
//             <Gallery
//               items={content.items || []}
//               itemsPerRow={
//                 (typeof content.itemsPerRow === 'string'
//                   ? Number.parseInt(content.itemsPerRow)
//                   : content.itemsPerRow) || 1
//               }
//               carouselMode={content.carouselMode}
//               styles={{
//                 maxWidth: '80rem',
//               }}
//             />
//           </Container>
//         );
//       }

//       case 'categories-home': {
//         return (
//           <Container key={`home_content_${index}`}>
//             <Categories items={content.items || []} />
//           </Container>
//         );
//       }

//       case 'carousel-productos': {
//         if (content.productClusterId)
//           return (
//             <Container key={`product_carousel_${index}`}>
//               <ProductCarousel
//                 productClusterId={content.productClusterId}
//                 onAddToCart={(product: ProductModel) => {
//                   methods.addToCart(product);
//                 }}
//               />
//             </Container>
//           );
//       }
//     }
//   })}

// <SectionCencosud />

// {(isXs && showSmartBanner) || (isSm && showSmartBanner) ? (
//   <SmartBanner
//     linkStore="https://play.google.com/store/apps/details?id=com.cencosud.easy.cl"
//     hideTime={1}
//   />
// ) : null}
