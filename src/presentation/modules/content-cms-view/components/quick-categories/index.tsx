import React from 'react';
import {
  CategoryContainer,
  ImageCategory,
  QuickCategoriesContainer,
  SubCategoryContainer,
  Subcategory,
} from './style';
import { ContentBody } from '@/domain/entities/content/content.types';
import Container from '@/presentation/components/atoms/Container';
import Image from 'next/image';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const QuickCategories = ({
  categoryId,
  backgroundCategory,
  categoryIcon,
  backgroundContainer,
  items,
  redirectionIcon,
  link,
}: ContentBody) => {
  const { device } = useBreakpoints();
  return (
    <Container>
      <QuickCategoriesContainer
        backgroundcolor={backgroundContainer}
        device={device}
      >
        <CategoryContainer href={link} backgroundcolor={backgroundCategory}>
          <ImageCategory
            src={categoryIcon}
            width={40}
            height={40}
            alt={categoryId}
          />
          <span>{categoryId}</span>
          <Image
            src={redirectionIcon}
            width={25}
            height={25}
            alt={categoryId}
          />
        </CategoryContainer>

        <SubCategoryContainer device={device}>
          {items.map((subcategory, index: number) => (
            <Subcategory
              href={subcategory.link}
              key={index}
              backgroundcolor={backgroundCategory}
            >
              <span>{subcategory.title}</span>
            </Subcategory>
          ))}
        </SubCategoryContainer>
      </QuickCategoriesContainer>
    </Container>
  );
};

export default QuickCategories;