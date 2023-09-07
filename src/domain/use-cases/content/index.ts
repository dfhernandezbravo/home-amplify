import ContentService from '@/application/services/content';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContent = createAsyncThunk('/get/content/home', async () => {
  try {
    return await ContentService.getContent();
  } catch (err) {
    return new Promise((_resolve, reject) => {
      reject(new Error('Content not found'));
    });
  }
});

export const getWorkspaceContent = createAsyncThunk(
  '/get/content/workspace',
  async (event: string) => {
    try {
      return await ContentService.getWorkspaceContent(event);
    } catch (err) {
      return new Promise((_resolve, reject) => {
        reject(new Error('Workspace Content not found'));
      });
    }
  },
);

export const getEventContent = createAsyncThunk(
  '/get/content/eventContent',
  async (landing: string) => {
    try {
      return await ContentService.getEventContent(landing);
    } catch (err) {
      return new Promise((_resolve, reject) => {
        reject(new Error('Event not found'));
      });
    }
  },
);
