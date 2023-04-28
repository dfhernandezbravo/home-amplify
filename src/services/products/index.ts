import { CartItemModel } from '@/store/cart/cart.type';
import axios from 'axios';

const ProductService = {
  getProducts: async (): Promise<CartItemModel[]> => {
    const response = await axios.get('https://fakestoreapi.com/products');
    if (response?.data) {
      return response.data.slice(0, 6);
    }
    return []; 
  }
};
export default ProductService;