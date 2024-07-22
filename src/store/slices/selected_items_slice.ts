import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../../services/planets';

const initialState: { items: Planet[] } = {
  items: []
};

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Planet>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) => item.url === action.payload);
      if (index > -1) state.items.splice(index, 1);
    },
    clearSelectedItems(state) {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearSelectedItems } = selectedItemsSlice.actions;
