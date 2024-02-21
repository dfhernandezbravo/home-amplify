import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './sidebar';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
