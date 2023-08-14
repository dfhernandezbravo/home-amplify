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
    const response = await axios.get(
      `/api/catalog/products/byClusterId/${clusterId}&_from=0&_to=${maxItems-1}`,
    );

    if (response?.data) {
      const products = response?.data;
      return products;
    }
    return [];
  },
  getProductsByIds: async (ids: string): Promise<any> => {
    const response = await axios.get(`/api/catalog/products/byIds/${ids}`);
    if (response?.data) return response?.data;
    return [];
  },
  getProductsBySkuIds: async (skus: string): Promise<any> => {
    const response = await axios.get(`/api/catalog/products/bySkus/${skus}`);
    if (response?.data) return response?.data;
    return [];
  },
};
export default ProductService;
