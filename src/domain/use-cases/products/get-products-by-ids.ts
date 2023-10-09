import ProductService from '@/application/services/products';

async function getProductsByIds(ids: string) {
  try {
    const { data } = await ProductService.getProductsByIds(ids);
    return data;
  } catch (err) {
    throw new Error('Oh no!');
  }
}

export default getProductsByIds;
