import { combineReducers } from '@reduxjs/toolkit';
import { count } from './count';

export const counter = combineReducers({
  count,
});

export * from './selectors';
