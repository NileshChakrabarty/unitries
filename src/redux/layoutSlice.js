import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLayoutConfig = createAsyncThunk('layout/fetchConfig', async (roleId) => {
  const response = await axios.get(`/api/layout/${roleId}`);
  return response.data;
});

const layoutSlice = createSlice({
  name: 'layout',
  initialState: { config: {}, status: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLayoutConfig.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLayoutConfig.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.config = action.payload;
      });
  },
});

export default layoutSlice.reducer;