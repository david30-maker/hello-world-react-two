import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from '../feature/greetingSlice.jsx';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});
