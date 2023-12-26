/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import {
  CategoryContainer,
  Container,
  RedirectionIcon,
  Subcategory,
  SubcategoryContainer,
} from '../../QuickCategory.styles';
import { ContentBody } from '@/domain/entities/content/content.types';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';

/**
 * @deprecated
 * @param props
 * @returns
 */

const Desktop = (props: ContentBody) => {
  const {
    categoryId,
    backgroundCategory,
    categoryIcon,
    backgroundContainer,
    items,
    redirectionIcon,
    link,
  } = props;
  const { redirect } = useRedirectLink();

  return (
    <Container backgroundcolor={backgroundContainer}>
      <div>
        <CategoryContainer
          href={redirect(link)}
          onClick={(e) => {
            e.stopPropagation();
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
              href={redirect(subcategory.link)}
              key={index}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Subcategory backgroundcolor={backgroundCategory}>
                {subcategory.title}
              </Subcategory>
            </Link>
          ))}
      </SubcategoryContainer>
    </Container>
  );
};

export default Desktop;
