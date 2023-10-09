import ProductService from '@/application/services/products';

async function getProductsByClusterId(clusterId: string, maxItems: number) {
  try {
    const { data } = await ProductService.getProductsByClusterId(
      clusterId,
      maxItems,
    );
    return data;
  } catch (err) {
    throw new Error('Oh no!');
  }
}

export default getProductsByClusterId;
