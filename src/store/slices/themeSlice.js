// src/store/slices/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: {
       name: 'light',
          colors: {
           primary: '#007bff',
            secondary: '#6c757d',
            background: '#ffffff',
            text: '#333333',
            },
        },
 };

  const themeSlice = createSlice({
    name: 'theme',
   initialState,
  reducers: {
       setTheme: (state, action) => {
         state.theme = action.payload
      },
    toggleTheme: (state) => {
      state.theme = state.theme.name === 'light' ? {
          name:'dark',
         colors: {
          primary: '#007bff',
            secondary: '#6c757d',
             background: '#333333',
            text: '#ffffff',
           }
        } :
           {
               name: 'light',
               colors: {
                 primary: '#007bff',
                 secondary: '#6c757d',
                 background: '#ffffff',
                 text: '#333333',
                }
         };
    },
  },
});

 export const { toggleTheme, setTheme } = themeSlice.actions;
  export default themeSlice.reducer;