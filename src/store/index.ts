import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export type IStore = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
