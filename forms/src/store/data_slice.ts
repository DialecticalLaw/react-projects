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
  isAgree: boolean;
}

type Forms = {
  controlled?: FormData;
  uncontrolled?: FormData;
  countries: string[];
};

const initialState: Forms = {
  countries: countries
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateUncontrolled(state, action: PayloadAction<FormData>) {
      state.uncontrolled = action.payload;
    },
    updateControlled(state, action: PayloadAction<FormData>) {
      state.controlled = action.payload;
    }
  }
});

export const { updateControlled, updateUncontrolled } = dataSlice.actions;
