import ProductService from '@/application/services/products';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from './product.type';

export const getProducts = createAsyncThunk(
  '/products',
  async (): Promise<Product[]> => {
    const response = await ProductService.getProducts();
    return response;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [] as Product[],
    loadingProducts: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});
export default productSlice;
