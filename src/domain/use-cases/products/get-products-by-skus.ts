import ProductService from '@/application/services/products';

async function getProductBySkus(skus: string) {
  try {
    const { data } = await ProductService.getProductsBySkuIds(skus);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default getProductBySkus;
