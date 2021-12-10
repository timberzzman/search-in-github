import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './Features/currentUserSlice';
import userDataReducer from './Features/userDataSlice';
import searchHistoryReducer from './Features/searchHistorySlice';

export default configureStore({
  reducer: {
    currentUser: currentUserReducer,
    userData: userDataReducer,
    searchHistory: searchHistoryReducer
  }
});
