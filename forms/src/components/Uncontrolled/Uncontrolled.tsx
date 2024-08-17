import { ValidationError } from 'yup';
import { formSchema } from '../../helpers/validationSchema';
import { useAppSelector } from '../../store/hooks';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import styles from './Uncontrolled.module.css';
import { useRef, useState } from 'react';
import { FormData } from '../../store/data_slice';

export function Uncontrolled() {
  const countries = useAppSelector((state) => state.data.countries);
  const [errors, setErrors] = useState<ValidationError[]>();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const isAgreeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let gender: 'male' | 'female' | undefined;
    if (genderMaleRef.current?.checked) gender = genderMaleRef.current?.value as 'male' | undefined;
    if (genderFemaleRef.current?.checked) gender = genderFemaleRef.current?.value as 'female' | undefined;

    const values: Partial<FormData> = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      repeat_password: passwordRepeatRef.current?.value,
      gender,
      country: countryRef.current?.value,
      isAgree: isAgreeRef.current?.checked
    };

    console.log(values);

    try {
      await formSchema.validate(values, { abortEarly: false });
    } catch (err) {
      if (err instanceof ValidationError) {
        setErrors(err.inner);
      }
    }
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input refLink={nameRef} placeholder="John" id="name" name="name" label="Your name" type="text" />
      <Input refLink={ageRef} placeholder="20" label="Your age" id="age" name="age" type="number" />
      <Input
        refLink={emailRef}
        placeholder="John@gmail.com"
        label="Your email"
        id="email"
        name="email"
        type="email"
      />

      <div className={styles.wrapper}>
        <Input refLink={passwordRef} name="password" id="password" label="Your password" type="password" />
        <Input
          refLink={passwordRepeatRef}
          name="repeat_password"
          id="repeat_password"
          label="Repeat"
          type="password"
        />
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
      </div>

      <Input
        refLink={countryRef}
        name="country"
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

      <div className={styles.wrapper}>
        <label htmlFor="avatar">Upload your picture (png/jpeg)</label>
        <input id="avatar" type="file" accept="image/png, image/jpeg" />
      </div>

      <Checkbox
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
  );
}
