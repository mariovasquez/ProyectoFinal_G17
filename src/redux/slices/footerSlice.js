import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  loading: false,
  error: {},
  data: {}
};

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {},

});


export const { } = footerSlice.actions;

export default footerSlice.reducer;