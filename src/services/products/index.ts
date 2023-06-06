import { ProductModel } from '@/store/products/product.type';
import axios from 'axios';

const ProductService = {
  getProducts: async (): Promise<ProductModel[]> => {
    const response = await axios.get(
      `https://easycl.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=productClusterIds:466`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response?.data) {
      return response.data;
    }
    return [];
  },

  getProductsByClusterId: async (
    productClusterIds: string
  ): Promise<ProductModel[]> => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS}/catalog/products/productsByClusterId`
    );

    console.log(response);
    if (response?.data) {
      return response.data;
    }
    return [];
  },
};
export default ProductService;
