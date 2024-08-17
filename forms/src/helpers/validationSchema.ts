import { boolean, object, ref, string } from 'yup';
import { countries } from '../store/countries';

export const formSchema = object({
  name: string()
    .required('Required field')
    .test('only-letters', 'Only letters are allowed', (name) => /^[a-zA-Zа-яА-Я]+$/.test(name))
    .test('first-upper-case', 'The first letter must be uppercase', (name) =>
      name ? name[0] === name[0].toUpperCase() : false
    ),
  age: string().test('positive-number', 'Age must be a positive number', (age) => Number(age) > 0),
  email: string().email('Incorrect email'),
  password: string().required('Required field'),
  repeat_password: string()
    .required('Required field')
    .oneOf([ref('password')], 'Passwords should match'),
  gender: string().required('Required field'),
  isAgree: boolean().isTrue('Required field'),
  country: string().test('is-correct-country-name', 'Choose correct country name', (country) =>
    country ? countries.includes(country) : false
  )
});
