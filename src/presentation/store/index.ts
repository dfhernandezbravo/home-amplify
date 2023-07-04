import { configureStore } from '@reduxjs/toolkit';

import productSlice from './products';
import contentSlice from './content';

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    content: contentSlice.reducer,
  },
});
export default store;
