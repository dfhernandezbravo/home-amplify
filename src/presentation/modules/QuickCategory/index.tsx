/* eslint-disable @next/next/no-img-element */
import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useLinks from '@/presentation/hooks/useLink';
import Link from 'next/link';
import { Fragment } from 'react';
import {
  CategoryContainer,
  CategoryContainerMobile,
  Container,
  ContainerMobile,
  RedirectionIcon,
  Subcategory,
  SubcategoryContainer,
  SubcategoryContainerMobile,
  SubcategoryMobileLink,
} from './QuickCategory.styles';
import useAnalytics from '@/presentation/hooks/useAnalytics';

const QuickCategory = (props: ContentBody) => {
  const { getLink, sendEvent } = useLinks();
  const { isLg } = useBreakpoints();
  const {
    methods: { sendImpressionInteraction },
  } = useAnalytics();

  const {
    categoryId,
    backgroundCategory,
    categoryIcon,
    backgroundContainer,
    items,
    redirectionIcon,
    link,
  } = props;

  const handleCategorieClick = (item: ItemContent) => {
    sendImpressionInteraction({
      event: 'Interaccion',
      category: 'Interacciones home',
      action: 'Clic botón calugas de categoría',
      tag: `${categoryId} / ${item.title}`,
    });
  };

  return (
    <Fragment>
      {isLg && (
        <Container backgroundcolor={backgroundContainer}>
          <div>
            <CategoryContainer
              href={getLink(link)}
              onClick={(e) => {
                e.stopPropagation();
                sendEvent(link);
              }}
              backgroundcolor={backgroundCategory}
            >
              <img src={categoryIcon} width={40} height={40} alt={categoryId} />
              {categoryId}
              <RedirectionIcon>
                <img
                  src={redirectionIcon}
                  width={25}
                  height={25}
                  alt={categoryId}
                />
              </RedirectionIcon>
            </CategoryContainer>
          </div>
          <SubcategoryContainer>
            {items &&
              items?.length > 0 &&
              items.map((subcategory, index: number) => (
                <Link
                  href={getLink(subcategory.link)}
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategorieClick(subcategory);
                    sendEvent(subcategory.link);
                  }}
                >
                  <Subcategory backgroundcolor={backgroundCategory}>
                    {subcategory.title}
                  </Subcategory>
                </Link>
              ))}
          </SubcategoryContainer>
        </Container>
      )}
      {!isLg && (
        <ContainerMobile backgroundcolor={backgroundContainer}>
          <div>
            <CategoryContainerMobile
              href={getLink(link)}
              onClick={(e) => {
                e.stopPropagation();
                sendEvent(link);
              }}
              backgroundcolor={backgroundCategory}
            >
              <img src={categoryIcon} width={40} height={40} alt={categoryId} />
              {categoryId}
              <RedirectionIcon>
                <img
                  src={redirectionIcon}
                  width={25}
                  height={25}
                  alt={categoryId}
                />
              </RedirectionIcon>
            </CategoryContainerMobile>
          </div>
          <SubcategoryContainerMobile>
            {items &&
              items?.length > 0 &&
              items.map((subcategory, index: number) => (
                <SubcategoryMobileLink
                  backgroundcolor={backgroundCategory}
                  href={getLink(subcategory.link)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategorieClick(subcategory);
                    sendEvent(subcategory.link);
                  }}
                  key={index}
                >
                  <span>{subcategory.title}</span>
                </SubcategoryMobileLink>
              ))}
          </SubcategoryContainerMobile>
        </ContainerMobile>
      )}
    </Fragment>
  );
};
export default QuickCategory;
