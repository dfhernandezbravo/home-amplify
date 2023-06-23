import ContentService from "@/application/services/content";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContent = createAsyncThunk('/get/content/home', async () =>{
    try {
        return await ContentService.getContent();
    } catch (err) {
        console.error('Error on getContent: ', err);
    }
});

