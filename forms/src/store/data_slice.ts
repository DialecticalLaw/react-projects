import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { countries } from './countries';

export interface FormData {
  name: string;
  age: string;
  email: string;
  password: string;
  repeat_password: string;
  gender: 'male' | 'female';
  country: string;
  picture: string;
  isAgree: boolean;
}

type SliceData = {
  controlled?: FormData;
  uncontrolled?: FormData;
  countries: string[];
  prevFormUpdated?: 'controlled' | 'uncontrolled';
};

const initialState: SliceData = {
  countries: countries
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateUncontrolled(state, action: PayloadAction<FormData>) {
      state.uncontrolled = action.payload;
      state.prevFormUpdated = 'uncontrolled';
    },
    updateControlled(state, action: PayloadAction<FormData>) {
      state.controlled = action.payload;
      state.prevFormUpdated = 'controlled';
    }
  }
});

export const { updateControlled, updateUncontrolled } = dataSlice.actions;
