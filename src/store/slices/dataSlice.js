// src/store/slices/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 originalData:[],
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
     fetchOriginalDataSuccess: (state, action) => {
       state.originalData = action.payload;
     },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, fetchOriginalDataSuccess } =
  dataSlice.actions;
export default dataSlice.reducer;