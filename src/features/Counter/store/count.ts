import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
  },
});

export const count = countSlice.reducer;
export const { increase, decrease } = countSlice.actions;
