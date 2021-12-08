import { createSlice } from '@reduxjs/toolkit';

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    value: ''
  },
  reducers: {
    set: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    }
  }
});

export const { set } = currentUserSlice.actions;

export default currentUserSlice.reducer;
