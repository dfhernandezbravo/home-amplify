/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import {
  CategoryContainer,
  Container,
  RedirectionIcon,
  Subcategory,
  SubcategoryContainer,
} from '../../QuickCategory.styles';
import useLinks from '@/presentation/hooks/useLink';
import { ContentBody } from '@/domain/entities/content/content.types';

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
  const { getLink, sendEvent } = useLinks();

  return (
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
  );
};

export default Desktop;
