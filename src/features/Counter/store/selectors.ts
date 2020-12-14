import { IStore } from 'store';

export const selectors = {
  getCount: (state: IStore) => state.counter.count,
};
