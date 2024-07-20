import { configureStore } from '@reduxjs/toolkit';
import { planetsApi } from '../services/planets';
import { pageSlice } from './slices/page_slice';

export const store = configureStore({
  reducer: {
    [planetsApi.reducerPath]: planetsApi.reducer,
    [pageSlice.reducerPath]: pageSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
