import { FormData } from '../../store/data_slice';
import styles from './Card.module.css';

export function Card({ data, isPrevUpdated }: { data: FormData; isPrevUpdated: boolean }) {
  return (
    <div className={`${styles.wrapper} ${isPrevUpdated ? styles.prev_updated : ''}`}>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      <p>Repeat password: {data.repeat_password}</p>
      <p>Gender: {data.gender}</p>
      <p>Country: {data.country}</p>
      <div className={styles.picture_wrapper}>
        <p>Picture:</p>
        <img className={styles.picture} src={data.picture} />
      </div>
      <p>Is agree: {data.isAgree.toString()}</p>
    </div>
  );
}