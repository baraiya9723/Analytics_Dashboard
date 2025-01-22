// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    theme: themeReducer,
  },
});

export default store;