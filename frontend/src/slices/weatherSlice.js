import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk("weather/getWeather", async (city) => {
  const response = await fetch(`https://weather-backend-zrd6.onrender.com/${city}`);
  const result = await response.json();
  return result;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null, // Set initial data to null
    loading: false,
    error: null,
  },
  reducers: {}, // Leave reducers empty for now
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
