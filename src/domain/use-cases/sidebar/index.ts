import sidebarService from '@/application/services/sidebar';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSidebar = createAsyncThunk('GET/sidebar', async () => {
  const { data } = await sidebarService.getSidebarData();
  return data?.value;
});
