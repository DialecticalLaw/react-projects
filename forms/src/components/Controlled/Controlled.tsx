import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../Button/Button';
import { PasswordStrength } from '../PasswordStrength/PasswordStrength';
import styles from './Controlled.module.css';
import { Input } from './Input/Input';
import { ValidationError } from 'yup';
import { useState } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../helpers/validationSchema';
import { Checkbox } from './Checkbox/Checkbox';
import { passwordSchema } from '../../helpers/passwordSchema';
import { FormData, updateControlled } from '../../store/data_slice';
import { isFormDataWithFile } from '../../helpers/isFormDataWithFile';
import { convertToBase64 } from '../../helpers/convertToBase64';

export type FormDataWith<T> = {
  [K in keyof FormData]: K extends 'picture' ? T : FormData[K];
};

export function Controlled() {
  const countries = useAppSelector((state) => state.data.countries);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm({ resolver: yupResolver(formSchema), mode: 'onChange' });
  const [strengthErrors, setStrengthErrors] = useState<ValidationError[] | 'init' | undefined>('init');

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (isFormDataWithFile(data)) {
      data.picture = await convertToBase64(data.picture[0] as File);
      dispatch(updateControlled(data as FormDataWith<string>));
      navigate('/');
    }
  };

  const validatePasswordStrength = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = e.target;
    if (!(eventTarget instanceof HTMLInputElement)) return;

    try {
      await passwordSchema.validate(eventTarget.value, { abortEarly: false });
      setStrengthErrors(undefined);
    } catch (err) {
      if (err instanceof ValidationError) {
        setStrengthErrors(err.inner);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.light} />
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <Input placeholder="John" id="name" name="name" label="Your name" type="text" />
        <Input placeholder="20" label="Your age" id="age" name="age" type="number" />
        <Input placeholder="John@gmail.com" label="Your email" id="email" name="email" type="text" />

        <div className={styles.password_wrapper}>
          <Input
            onChange={validatePasswordStrength}
            name="password"
            id="password"
            label="Your password"
            type="password"
          />
          <Input name="repeat_password" id="repeat_password" label="Repeat" type="password" />
          <PasswordStrength strengthErrors={strengthErrors} />
        </div>

        <div className={styles.gender_wrapper}>
          <label className={`${styles.gender} ${styles.male}`}>
            Male
            <input type="radio" {...methods.register('gender')} value="male" />
          </label>

          <label className={`${styles.gender} ${styles.female}`}>
            Female
            <input type="radio" {...methods.register('gender')} value="female" />
          </label>
          <p className={styles.error}>{methods.formState.errors.gender?.message}</p>
        </div>

        <Input name="country" id="country" type="text" label="Choose your country" list="countries" />
        <datalist id="countries">
          {countries.map((country) => {
            return <option key={country} value={country} />;
          })}
        </datalist>

        <div className={styles.picture_wrapper}>
          <label htmlFor="picture">Upload your picture (png/jpeg)</label>
          <input id="picture" {...methods.register('picture')} type="file" accept=".png,.jpeg" />
          <p className={styles.error}>{methods.formState.errors.picture?.message}</p>
        </div>

        <Checkbox
          name="isAgree"
          id="agree"
          label={
            <a className={styles.link} href="#">
              I accept Terms and Conditions agreement
            </a>
          }
        />

        <Button disabled={!methods.formState.isValid} type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
