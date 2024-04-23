/* eslint-disable */
import { ContentBody } from '@/domain/entities/content/content.types';
import useGetProducts from '@/domain/use-cases/products/get-products';
import ProductsCarousel from '@/presentation/components/molecules/products-carousel';
import WindowsEvents from '@/presentation/events';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import { useEffect } from 'react';

const ShowCase = (props: ContentBody) => {
  const { title, isActive, startDate, endDate } = props;

  const {
    data: productsItems,
    isIdle,
    isLoading,
    isError,
    mutate,
  } = useGetProducts(props);

  const isEnabled = !!(
    isDateInRange(startDate, endDate) &&
    isActive &&
    !isIdle &&
    !isLoading &&
    !isError &&
    productsItems?.length
  );

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    const mutateProducts = (event: Event) => {
      event.preventDefault();
      mutate();
    };
    document.addEventListener(
      WindowsEvents.UPDATE_SHIPPING_CART,
      mutateProducts,
    );
    return () => {
      document.removeEventListener(
        WindowsEvents.UPDATE_SHIPPING_CART,
        mutateProducts,
      );
    };
  }, []);

  return (
    <>{isEnabled && <ProductsCarousel items={productsItems} title={title} />}</>
  );
};

export default ShowCase;
