import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async (roleId) => {
  const response = await axios.get(`/api/menus/${roleId}`);
  return response.data;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: { items: [], status: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  },
});

export default menuSlice.reducer;