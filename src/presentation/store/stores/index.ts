import { createSlice } from '@reduxjs/toolkit';
import type { StoreInfo } from '@/domain/entities/content/content.types';

interface StoreProps {
  stores: StoreInfo[];
}

const INITIAL_STATE: StoreProps = {
  stores: [],
};

const stores = createSlice({
  name: 'stores',
  initialState: INITIAL_STATE,
  reducers: {
    setStore: (state, { payload }) => {
      state.stores = payload;
    },
  },
});

export const { setStore } = stores.actions;

export default stores;
