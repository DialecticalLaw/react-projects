import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { planetsApi } from '../services/planets';
import { pageSlice } from './slices/page_slice';
import { selectedItemsSlice } from './slices/selected_items_slice';

const rootReducer = combineSlices(planetsApi, pageSlice, selectedItemsSlice);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;