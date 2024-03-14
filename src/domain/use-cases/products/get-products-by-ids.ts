import ProductService from '@/application/services/products';

async function getProductsByIds(ids: string) {
  try {
    const response = await ProductService.getProductsByIds(ids);
    if (response) return response;
    return null;
  } catch (err) {
    console.error(err);
  }
}

export default getProductsByIds;
