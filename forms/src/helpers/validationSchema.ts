import { boolean, mixed, object, ref, string } from 'yup';
import { countries } from '../store/countries';

const name = string()
  .required('Required field')
  .test('only-letters', 'Only letters are allowed', (name) => /^[a-zA-Zа-яА-Я]+$/.test(name))
  .test('first-upper-case', 'The first letter must be uppercase', (name) =>
    name ? name[0] === name[0].toUpperCase() : false
  );

const age = string().test('positive-number', 'Age must be a positive number', (age) => Number(age) > 0);
const email = string().required('Required field').email('Incorrect email');

const password = string().required('Required field');
const repeat_password = string()
  .required('Required field')
  .oneOf([ref('password')], 'Passwords should match');

const gender = string().required('Required field');
const pictures = mixed()
  .test('required-field', 'Required field!', (pictures) => {
    if (pictures instanceof FileList) return Boolean(pictures.length);
  })
  .test('picture-size', 'Files up to 1MB are allowed', (pictures) => {
    if (pictures instanceof FileList && pictures[0] instanceof File) return pictures[0].size < 1024000;
  });

const isAgree = boolean().isTrue('Required field');
const country = string().test('is-correct-country-name', 'Choose correct country name', (country) =>
  country ? countries.includes(country) : false
);

export const formSchema = object({
  name,
  age,
  email,
  password,
  repeat_password,
  gender,
  pictures,
  isAgree,
  country
});
