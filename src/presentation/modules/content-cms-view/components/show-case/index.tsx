import { ContentBody } from '@/domain/entities/content/content.types';
import getProductsByClusterId from '@/domain/use-cases/products/get-products-by-cluster';
import getProductsByIds from '@/domain/use-cases/products/get-products-by-ids';
import getProductBySkus from '@/domain/use-cases/products/get-products-by-skus';
import ProductsCarousel from '@/presentation/components/molecules/products-carousel';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import { Product } from '@cencosud-ds/easy-design-system';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const ShowCase = (props: ContentBody) => {
  const { products, fieldName, maxItems, title, isActive, startDate, endDate } =
    props;

  const [productItems, setProductItems] = useState<Product[]>([]);

  const { data: productsCluster } = useQuery(
    ['get-products-by-cluster', { products, maxItems }],
    () => getProductsByClusterId(products, maxItems),
    {
      enabled: fieldName === 'clusterId',
    },
  );

  const { data: productsSkus } = useQuery(
    ['get-products-by-sku', { products }],
    () => getProductBySkus(products),
    {
      enabled: fieldName === 'skuId',
    },
  );

  const { data: productsByIds } = useQuery(
    ['get-products-by-ids', { products }],
    () => getProductsByIds(products),
    {
      enabled: fieldName === 'productId',
    },
  );

  useEffect(() => {
    if (productsByIds) setProductItems(productsByIds);
    if (productsCluster) setProductItems(productsCluster);
    if (productsSkus) setProductItems(productsSkus);
  }, [productsByIds, productsCluster, productsSkus]);

  if (!isActive) return <></>;

  return (
    <>
      {isDateInRange(startDate, endDate) && (
        <ProductsCarousel items={productItems} title={title} />
      )}
    </>
  );
};

export default ShowCase;
