import { ProductModel } from "@/store/products/product.type";
import axios from "axios";

const ProductService = {
  getProducts: async (): Promise<ProductModel[]> => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response?.data) {
      return response.data.slice(0, 4);
    }
    return [];
  },
};
export default ProductService;
