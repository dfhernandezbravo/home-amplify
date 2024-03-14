import ProductService from '@/application/services/products';

async function getProductsByClusterId(clusterId: string, maxItems: number) {
  try {
    const response = await ProductService.getProductsByClusterId(
      clusterId,
      maxItems,
    );
    if (response) return response?.data;
    return null;
  } catch (err) {
    console.error(err);
  }
}

export default getProductsByClusterId;
