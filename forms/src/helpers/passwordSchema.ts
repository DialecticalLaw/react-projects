import { string } from 'yup';

export const passwordSchema = string()
  .test('contain-number', 'Add a number', (password) => /\d/.test(password || ''))
  .test('contain-uppercase', 'Add an uppercase character', (password) => /[A-Z]/.test(password || ''))
  .test('contain-lowercase', 'Add an lowercase character', (password) => /[a-z]/.test(password || ''))
  .test('contain-special', 'Add a special character', (password) => /[^a-zA-Z0-9]/.test(password || ''));
