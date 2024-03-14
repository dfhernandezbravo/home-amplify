/* eslint-disable */
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
  const { fieldName, maxItems, title, isActive, startDate, endDate, items } =
    props;

  const [productsItems, setProductsItems] = useState<Product[] | any>([]);

  const { data: productsCluster } = useQuery(
    ['get-products-by-cluster', { items, maxItems }],
    () => getProductsByClusterId(items?.toString(), maxItems),
    {
      enabled: fieldName === 'clusterId',
    },
  );

  const { data: productsSkus } = useQuery(
    ['get-products-by-sku', { items }],
    () => getProductBySkus(items?.toString()),
    {
      enabled: fieldName === 'sku',
    },
  );

  const { data: productsByIds } = useQuery(
    ['get-products-by-ids', { items }],
    () => getProductsByIds(items?.toString()),
    {
      enabled: fieldName === 'productId',
    },
  );

  useEffect(() => {
    if (productsCluster) setProductsItems(productsCluster);
    if (productsSkus) setProductsItems(productsSkus);
    if (productsByIds) setProductsItems(productsByIds);
  }, [productsCluster, productsSkus, productsByIds]);

  return (
    <>
      {isDateInRange(startDate, endDate) && isActive && (
        <ProductsCarousel items={productsItems} title={title} />
      )}
    </>
  );
};

export default ShowCase;
