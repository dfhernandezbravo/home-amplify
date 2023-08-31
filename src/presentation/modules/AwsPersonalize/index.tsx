import { ContentBody } from '@/domain/entities/content/content.types';
import getProductsAws from '@/domain/use-cases/aws-personalize/get-products';
import getSkusAws from '@/domain/use-cases/aws-personalize/get-skus';
import CarouselProducts from '@/presentation/components/molecules/carousels/products';
import { useAppSelector } from '@/presentation/hooks/storeHooks';
import useLocalStorage from '@/presentation/hooks/useLocalStorage';
import { Product } from '@/presentation/store/products/product.type';
import React, { useCallback, useEffect, useState } from 'react';

export interface AwsPersonalizeProps {
  campaignName: Campaigns;
  title: string;
}

const AwsPersonalize: React.FC<ContentBody> = ({ campaignName, title }) => {
  const { awsPersonalize } = useAppSelector((state) => state.cms);
  const [products, setProducts] = useState<Product[]>([]);
  const { getValueLocalStorage } = useLocalStorage();

  const getProducts = async (skus: string[]) => {
    setProducts(await getProductsAws(skus));
  };

  const getUserId = useCallback(() => {
    const orderForm = getValueLocalStorage('orderform');

    if (!orderForm) return '*';

    const { userProfileId } = JSON.parse(orderForm) as OrderForm;

    return userProfileId || '*';
  }, [getValueLocalStorage]);

  const getSkus = useCallback(async () => {
    if (awsPersonalize) {
      const request: AwsPersonalizeBody = {
        ...awsPersonalize[campaignName],
        userId: getUserId(),
      };
      const skus = await getSkusAws(request);
      getProducts(skus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [awsPersonalize, campaignName]);

  useEffect(() => {
    getSkus();
  }, [getSkus]);

  return (
    <div>
      <CarouselProducts
        products={products}
        title={title}
        onAddToCart={() => {}}
      />
    </div>
  );
};

export default AwsPersonalize;
