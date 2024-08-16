import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import styles from './Uncontrolled.module.css';

export function Uncontrolled() {
  return (
    <form className={styles.form}>
      <Input placeholder="John" id="name" name="name" label="Your name" type="text" />
      <Input placeholder="20" label="Your age" id="age" name="age" type="number" />
      <Input placeholder="JohnSm@gmail.com" label="Your email" id="email" name="email" type="email" />

      <div className={styles.wrapper}>
        <Input name="password" id="password" label="Your password" type="password" />
        <Input name="repeat_password" id="repeat_password" label="Repeat" type="password" />
      </div>

      <div className={styles.gender_wrapper}>
        <label className={styles.gender}>
          Male
          <input type="radio" name="gender" value="male" />
        </label>

        <label className={styles.gender}>
          Female
          <input type="radio" name="gender" value="female" />
        </label>
      </div>

      <Input name="country" id="country" type="text" label="Choose your country" list="countries" />
      <datalist id="countries">
        <option value="Russia"></option>
        <option value="USA"></option>
        <option value="China"></option>
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

      <Button type="button">Submit</Button>
    </form>
  );
}
