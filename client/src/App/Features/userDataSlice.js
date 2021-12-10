import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    value: {}
  },
  reducers: {
    set: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    }
  }
});

export const { set } = userDataSlice.actions;

export default userDataSlice.reducer;
