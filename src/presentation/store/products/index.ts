import { createSlice } from '@reduxjs/toolkit';
import { Product } from './product.type';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [] as Product[],
    loadingProducts: false,
  },
  reducers: {},
});
export default productSlice;
