import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './data_slice';

const rootReducer = combineSlices(dataSlice);

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
