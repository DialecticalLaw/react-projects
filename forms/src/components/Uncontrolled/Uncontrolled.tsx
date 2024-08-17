import { ValidationError } from 'yup';
import { formSchema } from '../../helpers/validationSchema';
import { useAppSelector } from '../../store/hooks';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import styles from './Uncontrolled.module.css';

export function Uncontrolled() {
  const countries = useAppSelector((state) => state.data.countries);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await formSchema.validate({
        name: 'Vasya',
        age: '20',
        email: 'v.vasya@gmail.com',
        password: 'ddd',
        repeat_password: 'ddd',
        gender: 'male',
        country: 'Belarus',
        isAgree: true
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        console.error(err.errors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input placeholder="John" id="name" name="name" label="Your name" type="text" />
      <Input placeholder="20" label="Your age" id="age" name="age" type="number" />
      <Input placeholder="John@gmail.com" label="Your email" id="email" name="email" type="email" />

      <div className={styles.wrapper}>
        <Input name="password" id="password" label="Your password" type="password" />
        <Input name="repeat_password" id="repeat_password" label="Repeat" type="password" />
      </div>

      <div className={styles.gender_wrapper}>
        <label className={`${styles.gender} ${styles.male}`}>
          Male
          <input type="radio" name="gender" value="male" />
        </label>

        <label className={`${styles.gender} ${styles.female}`}>
          Female
          <input type="radio" name="gender" value="female" />
        </label>
      </div>

      <Input name="country" id="country" type="text" label="Choose your country" list="countries" />
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
