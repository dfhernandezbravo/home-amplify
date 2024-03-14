import ProductService from '@/application/services/products';

async function getProductBySkus(skus: string) {
  try {
    const response = await ProductService.getProductsBySkuIds(skus);
    if (response) return response;
    return null;
  } catch (err) {
    console.error(err);
  }
}

export default getProductBySkus;
