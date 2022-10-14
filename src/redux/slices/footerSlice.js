import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReadFooter = createAsyncThunk(
  'footer/fetchReadFooter',
  async (_, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        url: 'LINK DE API XD https://eakon.herokuapp.com/api/contacto?popilate=*'
      }
      const {data} = await axios(options);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  loading: false,
  error: {},
  data: {}
};

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadFooter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadFooter.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.data = payload;
    });
    builder.addCase(fetchReadFooter.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.data = {};
    });
  }
});



// export const { } = footerSlice.actions;

export default footerSlice.reducer;