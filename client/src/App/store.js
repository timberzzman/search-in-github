import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './Features/currentUserSlice';

export default configureStore({
  reducer: {
    currentUser: currentUserReducer
  }
});
