import { ProductModel } from '@/presentation/store/products/product.type';
import axios from 'axios';

const ProductService = {
  // deprecated
  getProducts: async (): Promise<ProductModel[]> => {
    const response = await axios.get(
      `https://easycl.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=productClusterIds:466`,
    );
    if (response?.data) {
      return response.data;
    }
    return [];
  },
  getProductsByClusterId: async (
    {clusterId, maxItems}: {clusterId: string, maxItems: number}): Promise<ProductModel[]> => {
    const parameters = encodeURIComponent(`${clusterId}&_from=0&_to=${maxItems-1}`)
    const response = await axios.get(
      `/api/catalog/products/byClusterId/${parameters}`,
    );

    if (response?.data) {
      const products = response?.data;
      return products;
    }
    return [];
  },
  getProductsByIds: async (ids: string): Promise<any> => {
    const idsNumber = encodeURIComponent(ids)
    const response = await axios.get(`/api/catalog/products/byIds/${idsNumber}`);
    if (response?.data) return response?.data;
    return [];
  },
  getProductsBySkuIds: async (skus: string): Promise<any> => {
    const skusNumber = encodeURIComponent(skus)
    const response = await axios.get(`/api/catalog/products/bySkus/${skusNumber}`);
    if (response?.data) return response?.data;
    return [];
  },
};
export default ProductService;
