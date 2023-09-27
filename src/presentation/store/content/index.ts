import { ContentCMS } from '@/domain/entities/content/content.types';
import {
  getContent,
  getEventContent,
  getWorkspaceContent,
} from '@/domain/use-cases/content';
import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    content: {} as ContentCMS | null,
    loadingContent: false,
    eventContent: {} as ContentCMS | null,
    loadingEventContent: false,
    errorEventContent: false,
    workspaceContent: {} as ContentCMS | null,
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
      })
      .addCase(getEventContent.fulfilled, (state, { payload }) => {
        state.eventContent = payload;
        state.errorEventContent = false;
        state.loadingEventContent = false;
      })
      .addCase(getEventContent.pending, (state) => {
        state.errorEventContent = false;
        state.loadingEventContent = true;
      })
      .addCase(getEventContent.rejected, (state) => {
        state.errorEventContent = true;
      })
      .addCase(getWorkspaceContent.fulfilled, (state, { payload }) => {
        state.workspaceContent = payload;
      });
  },
});

export default contentSlice;
