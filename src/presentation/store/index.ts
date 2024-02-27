import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import productSlice from './products';
import contentSlice from './content';
import shoppingCartSlice from './shopping-cart/slices/shopping-cart-slice';
import cmsSlice from './cms/slices/cms-slice';
import sidebarSlice from './sidebar';

const persistShoppingCartConfig = {
  key: 'shopping-cart',
  storage,
};

const shoppingCartReducer = persistReducer(
  persistShoppingCartConfig,
  shoppingCartSlice.reducer,
);

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    content: contentSlice.reducer,
    shoppingCart: shoppingCartReducer,
    cms: cmsSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
