// slices/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://lusty.asia:1443/api/jobs');
  const data = await response.json();
  return data;
});
interface jobDataState {
  loading: boolean;
  data: string | null;
  error: any | null;
}

const jobDataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: null,
    error: null,
  } as jobDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default jobDataSlice.reducer;
