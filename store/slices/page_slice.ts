import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../../interfaces';

const initialState: { pageNumber: number; items: Planet[] } = {
  pageNumber: 0,
  items: []
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePage(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
    updateItems(state, action: PayloadAction<Planet[]>) {
      state.items = action.payload;
    }
  }
});

export const { updatePage, updateItems } = pageSlice.actions;
