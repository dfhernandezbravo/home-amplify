import ProductService from '@/application/services/products';

async function getProductBySkus(skus: string) {
  try {
    const { data } = await ProductService.getProductsBySkuIds(skus);
    return data;
  } catch (err) {
    throw new Error('Oh no!');
  }
}

export default getProductBySkus;
