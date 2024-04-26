import { ContentBody } from '@/domain/entities/content/content.types';
import { useMutation } from 'react-query';
import getProductsByClusterId from './get-products-by-cluster';
import getProductBySkus from './get-products-by-skus';
import getProductsByIds from './get-products-by-ids';
import { Product } from '@ccom-easy-design-system/molecules.product-card/dist/types';

const getProductsFn = {
  clusterId: getProductsByClusterId,
  sku: getProductBySkus,
  productId: getProductsByIds,
};

const useGetProducts = (contentBody: ContentBody) => {
  const { data, isLoading, isError, mutate, isIdle } = useMutation<Product[]>(
    () =>
      getProductsFn[contentBody.fieldName](
        contentBody.products.toString(),
        contentBody.maxItems,
      ),
  );
  return {
    data,
    isIdle,
    isLoading,
    isError,
    mutate,
  };
};

export default useGetProducts;
