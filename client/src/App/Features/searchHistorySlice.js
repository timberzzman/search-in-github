import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function setSearchHistory(data) {
  try {
    await AsyncStorage.setItem('@searchHistory', JSON.stringify(data));
  } catch (e) {
    console.log('error when storing search history in storage');
    console.log(e);
  }
}

export const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState: {
    value: []
  },
  reducers: {
    init: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    add: (state, action) => {
      if (!state.value.includes(action.payload)) {
        // eslint-disable-next-line no-param-reassign
        state.value = [...state.value, action.payload];
        setSearchHistory(state.value);
      }
    },
    clear: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value = [];
    }
  }
});

export const { init, add, clear } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
