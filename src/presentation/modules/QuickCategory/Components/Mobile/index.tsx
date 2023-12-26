/* eslint-disable @next/next/no-img-element */

import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import {
  CategoryContainerMobile,
  ContainerMobile,
  RedirectionIcon,
  SubcategoryContainerMobile,
  SubcategoryMobileLink,
} from '../../QuickCategory.styles';
import { ContentBody } from '@/domain/entities/content/content.types';

/**
 * @deprecated
 * @param props
 * @returns
 */
const Mobile = (props: ContentBody) => {
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
    <ContainerMobile backgroundcolor={backgroundContainer}>
      <div>
        <CategoryContainerMobile
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
        </CategoryContainerMobile>
      </div>
      <SubcategoryContainerMobile>
        {items &&
          items?.length > 0 &&
          items.map((subcategory, index: number) => (
            <SubcategoryMobileLink
              backgroundcolor={backgroundCategory}
              href={redirect(subcategory.link)}
              onClick={(e) => {
                e.stopPropagation();
              }}
              key={index}
            >
              <span>{subcategory.title}</span>
            </SubcategoryMobileLink>
          ))}
      </SubcategoryContainerMobile>
    </ContainerMobile>
  );
};

export default Mobile;
