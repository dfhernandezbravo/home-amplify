import ProductService from "@/services/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItemModel } from '../cart/cart.type';

export const getProducts = createAsyncThunk('/products', async(): Promise<CartItemModel[]> => {
  try {
    const response = await ProductService.getProducts();
    return response;
  } catch (err) {
    console.error('::: Error on getProduct fr :::', err)
    throw err
  }
})

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [] as CartItemModel[],
    loadingProducts: false
  },
  reducers:{},
  extraReducers: builder => {
    builder
    .addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    })
  }
});
export default productSlice;