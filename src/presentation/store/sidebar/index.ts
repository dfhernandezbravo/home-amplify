import { SidebarState } from '@/domain/entities/sidebar/sidebarState.entity';
import { getSidebar } from '@/domain/use-cases/sidebar';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: SidebarState = {
  sideBarOptions: null,
  loading: true,
  error: '',
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSidebar.fulfilled, (state, action) => {
        state.loading = false;
        state.sideBarOptions = action.payload;
      })
      .addCase(getSidebar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export default sidebarSlice;
