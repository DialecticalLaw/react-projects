import { ValidationError } from 'yup';
import { formSchema } from '../../helpers/validationSchema';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../Button/Button';
import { Checkbox } from './Checkbox/Checkbox';
import { Input } from './Input/Input';
import styles from './Uncontrolled.module.css';
import { useRef, useState } from 'react';
import { getErrorMessage } from '../../helpers/getErrorMessage';
import { passwordSchema } from '../../helpers/passwordSchema';
import { PasswordStrength } from '../PasswordStrength/PasswordStrength';
import { FormData, updateUncontrolled } from '../../store/data_slice';
import { convertToBase64 } from '../../helpers/convertToBase64';
import { useNavigate } from 'react-router-dom';

export function Uncontrolled() {
  const countries = useAppSelector((state) => state.data.countries);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<ValidationError[]>();
  const [strengthErrors, setStrengthErrors] = useState<ValidationError[] | 'init' | undefined>('init');

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const isAgreeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let gender: 'male' | 'female' | undefined;
    if (genderMaleRef.current?.checked) gender = genderMaleRef.current?.value as 'male' | undefined;
    if (genderFemaleRef.current?.checked) gender = genderFemaleRef.current?.value as 'female' | undefined;

    const values = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      repeat_password: passwordRepeatRef.current?.value,
      gender,
      country: countryRef.current?.value,
      picture: pictureRef.current?.files as FileList | null | undefined | string,
      isAgree: isAgreeRef.current?.checked
    };

    try {
      await passwordSchema.validate(values.password, { abortEarly: false });
      setStrengthErrors(undefined);
    } catch (err) {
      if (err instanceof ValidationError) {
        setStrengthErrors(err.inner);
      }
    }

    try {
      await formSchema.validate(values, { abortEarly: false });
      const formData = {
        name: values.name,
        age: values.age,
        email: values.email,
        password: values.password,
        repeat_password: values.repeat_password,
        gender: values.gender,
        country: values.country,
        picture: await convertToBase64(values.picture ? (values.picture[0] as File) : undefined),
        isAgree: values.isAgree
      } as FormData;

      setErrors(undefined);
      dispatch(updateUncontrolled(formData));
      navigate('/');
    } catch (err) {
      if (err instanceof ValidationError) {
        setErrors(err.inner);
      }
    }
  };

  return (
    <>
      <div className={styles.light} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          error={getErrorMessage(errors, 'name')}
          refLink={nameRef}
          placeholder="John"
          id="name"
          label="Your name"
          type="text"
        />
        <Input
          error={getErrorMessage(errors, 'age')}
          refLink={ageRef}
          placeholder="20"
          label="Your age"
          id="age"
          type="number"
        />
        <Input
          error={getErrorMessage(errors, 'email')}
          refLink={emailRef}
          placeholder="John@gmail.com"
          label="Your email"
          id="email"
          type="text"
        />

        <div className={styles.password_wrapper}>
          <Input
            error={getErrorMessage(errors, 'password')}
            refLink={passwordRef}
            id="password"
            label="Your password"
            type="password"
          />
          <Input
            refLink={passwordRepeatRef}
            error={getErrorMessage(errors, 'repeat_password')}
            id="repeat_password"
            label="Repeat"
            type="password"
          />
          <PasswordStrength strengthErrors={strengthErrors} />
        </div>

        <div className={styles.gender_wrapper}>
          <label className={`${styles.gender} ${styles.male}`}>
            Male
            <input ref={genderMaleRef} type="radio" name="gender" value="male" />
          </label>

          <label className={`${styles.gender} ${styles.female}`}>
            Female
            <input ref={genderFemaleRef} type="radio" name="gender" value="female" />
          </label>
          <p className={styles.error}>{getErrorMessage(errors, 'gender')}</p>
        </div>

        <Input
          error={getErrorMessage(errors, 'country')}
          refLink={countryRef}
          id="country"
          type="text"
          label="Choose your country"
          list="countries"
        />
        <datalist id="countries">
          {countries.map((country) => {
            return <option key={country} value={country} />;
          })}
        </datalist>

        <div className={styles.picture_wrapper}>
          <label htmlFor="picture">Upload your picture (png/jpeg)</label>
          <input ref={pictureRef} id="picture" type="file" accept=".png,.jpeg" />
          <p className={styles.error}>{getErrorMessage(errors, 'picture')}</p>
        </div>

        <Checkbox
          error={getErrorMessage(errors, 'isAgree')}
          refLink={isAgreeRef}
          id="agree"
          label={
            <a className={styles.link} href="#">
              I accept Terms and Conditions agreement
            </a>
          }
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
