import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import styles from './Uncontrolled.module.css';

export function Uncontrolled() {
  return (
    <form className={styles.form}>
      <Input placeholder="Name" type="text" />
      <Input placeholder="Age" type="number" />
      <Input placeholder="Email" type="email" />

      <div className={styles.password_wrapper}>
        <Input placeholder="Enter your password" type="password" />
        <Input placeholder="Repeat" type="password" />
      </div>

      <div className={styles.gender_wrapper}>
        <label>
          Male
          <input type="radio" name="gender" value="male" />
        </label>
        <label>
          Female
          <input type="radio" name="gender" value="female" />
        </label>
      </div>

      <div className={styles.terms_conditions_wrapper}>
        <a className={styles.link} href="#">
          I accept Terms and Conditions agreement
        </a>{' '}
        <Checkbox />
      </div>

      <input type="file" accept="image/png, image/jpeg" />

      <Input type="text" placeholder="Country" list="countries" />
      <datalist id="countries">
        <option value="Russia"></option>
        <option value="USA"></option>
        <option value="China"></option>
      </datalist>

      <Button type="button">Submit</Button>
    </form>
  );
}
