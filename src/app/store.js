import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../Slices/postsSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

