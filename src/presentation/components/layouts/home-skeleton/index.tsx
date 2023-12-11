import React from 'react';
import { Container, HomeSkeletonContainer } from './style';
import MainCarouselSkeleton from '@/presentation/modules/skeletons/main-carousel-skeleton';
import FeaturedCategoriesSkeleton from '@/presentation/modules/skeletons/featured-categories-skeleton';
import CategoriesCarouselSkeleton from '@/presentation/modules/skeletons/categories-carousel-skeleton';
import CalugasSkeleton from '@/presentation/modules/skeletons/calugas-skeleton';
import ProductsCarouselSkeleton from '@/presentation/modules/skeletons/products-carousel-skeleton';
import BannerSkeleton from '@/presentation/modules/skeletons/banner-skeleton';

const HomeSkeleton = () => {
  return (
    <HomeSkeletonContainer>
      <MainCarouselSkeleton />
      <Container>
        <FeaturedCategoriesSkeleton />
        <CategoriesCarouselSkeleton />
        <CalugasSkeleton />
        <ProductsCarouselSkeleton />
        <BannerSkeleton />
      </Container>
    </HomeSkeletonContainer>
  );
};

export default HomeSkeleton;
