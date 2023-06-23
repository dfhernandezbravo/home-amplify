import { getContent } from '@/domain/use-cases/content';
import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    content: [] as any,
    loadingContent: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContent.fulfilled, (state, { payload }) => {
        state.content = payload;
        state.loadingContent = false;
      })
      .addCase(getContent.pending, (state) => {
        state.loadingContent = true;
      });
  },
});

export default contentSlice;
