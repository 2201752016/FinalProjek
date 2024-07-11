import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import themeReducer from './themeSlice';

const makeStore = () => configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export const wrapper = createWrapper(makeStore);
