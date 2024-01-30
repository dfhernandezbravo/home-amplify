import ProductService from '@/application/services/products';

async function getProductsByIds(ids: string) {
  try {
    const { data } = await ProductService.getProductsByIds(ids);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default getProductsByIds;
