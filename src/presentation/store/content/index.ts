import { getContent, getEventContent } from '@/domain/use-cases/content';
import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    content: [] as any,
    loadingContent: false,
    eventContent: [] as any,
    loadingEventContent: false,
    errorEventContent: false,
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
      }),
      builder
        .addCase(getEventContent.fulfilled, (state, { payload }) => {
          state.eventContent = payload;
          state.errorEventContent = false;
          state.loadingEventContent = false;
        })
        .addCase(getEventContent.pending, (state) => {
          state.errorEventContent = false;
          state.loadingEventContent = true;
        })
        .addCase(getEventContent.rejected, (state, { payload }) => {
          state.errorEventContent = true;
        });
  },
});

export default contentSlice;
