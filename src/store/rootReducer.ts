import { combineReducers } from '@reduxjs/toolkit';
import { counter } from 'features/Counter/store';

export const rootReducer = combineReducers({
  counter,
});
