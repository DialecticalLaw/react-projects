import { ReactNode } from 'react';
import styles from './Checkbox.module.css';

export function Checkbox({
  refLink,
  label,
  id
}: {
  id: string;
  refLink?: React.RefObject<HTMLInputElement>;
  label: ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.checkbox_wrapper}>
        <input id={id} className={styles.checkbox} type="checkbox" ref={refLink} />
        <div className={styles.filling} />
      </div>
    </div>
  );
}
