import ContentService from '@/application/services/content';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContent = createAsyncThunk('/get/content/home', async () => {
  try {
    return await ContentService.getContent();
  } catch (err) {
    console.error('Error on getContent: ', err);
  }
});

export const getWorkspaceContent = createAsyncThunk('/get/content/workspace', async (event: string) => {
  try {
    return await ContentService.getWorkspaceContent(event);
  } catch (err) {
    console.error('Error on get workspace content: ', err);
  }
});

export const getEventContent = createAsyncThunk(
  '/get/content/eventContent',
  async (landing: string) => {
    try {
      return await ContentService.getEventContent(landing);
    } catch (err) {
      console.error('Error on getContent: ', err);
      return new Promise((resolve, reject) => {
        reject(new Error('Event not found'));
      });
    }
  },
);
