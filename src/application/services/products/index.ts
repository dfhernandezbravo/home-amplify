import { environments } from '@/domain/env/environments';
import { ProductModel } from '@/presentation/store/products/product.type';
import axios from 'axios';

const ProductService = {
  getProducts: async (): Promise<ProductModel[]> => {
    const response = await axios.get(
      `https://easycl.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=productClusterIds:466`
    );
    if (response?.data) {
      return response.data;
    }
    return [];
  },
  getProductsByClusterId: async (
    productClusterIds: string,
  ): Promise<ProductModel[]> => {
    const response = await axios.get(
      `/api/catalog/products/byClusterId/${productClusterIds}`,
    );

    if (response?.data) {
      return response.data;
    }
    return [];
  },
  getProductsByIds: async(ids: string): Promise<any> => {
    const response = await axios.get(`/api/catalog/products/byIds/${ids}`);
    if(response?.data) return response?.data;
    return [];
  }
};
export default ProductService;
