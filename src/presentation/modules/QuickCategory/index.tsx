/* eslint-disable @next/next/no-img-element */
import useLinks from '@/presentation/hooks/useLink';
import {
  CategoryContainer,
  Container,
  SubcategoryContainer,
  Subcategory,
  RedirectionIcon,
  ContainerMobile,
  CategoryContainerMobile,
  SubcategoryContainerMobile,
  SubcategoryMobileLink,
} from './QuickCategory.styles';
import { QuickCategoryItems, QuickCategoryStruct } from './QuickCategory.types';
import Link from 'next/link';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Fragment } from 'react';

const QuickCategory = (props: QuickCategoryStruct) => {
  const { getLink } = useLinks();
  const { isLg } = useBreakpoints();

  const {
    categoryId,
    backgroundCategory,
    categoryIcon,
    backgroundContainer,
    items,
    redirectionIcon,
    link,
  } = props;

  return (
    <Fragment>
      {isLg && (
        <Container backgroundColor={backgroundContainer}>
          <div>
            <CategoryContainer
              href={getLink(link)}
              backgroundColor={backgroundCategory}
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
              items.map((subcategory: QuickCategoryItems, index: number) => (
                <Link href={getLink(subcategory.link)} key={index}>
                  <Subcategory backgroundColor={backgroundCategory}>{subcategory.title}</Subcategory>
                </Link>
              ))}
          </SubcategoryContainer>
        </Container>
      )}
      {!isLg && (
        <ContainerMobile backgroundColor={backgroundContainer}>
          <div>
            <CategoryContainerMobile
              href={getLink(link)}
              backgroundColor={backgroundCategory}
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
              items.map((subcategory: QuickCategoryItems, index: number) => (
                <SubcategoryMobileLink backgroundColor={backgroundCategory} href={getLink(subcategory.link)} key={index}>
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
