import ProductService from '@/application/services/products';

async function getProductsByClusterId(clusterId: string, maxItems: number) {
  try {
    const { data } = await ProductService.getProductsByClusterId(
      clusterId,
      maxItems,
    );
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default getProductsByClusterId;
