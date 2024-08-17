import { ReactNode } from 'react';
import styles from './Checkbox.module.css';

export function Checkbox({
  refLink,
  label,
  id,
  error
}: {
  id: string;
  refLink?: React.RefObject<HTMLInputElement>;
  label: ReactNode;
  error?: string;
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.checkbox_wrapper}>
        <input id={id} className={styles.checkbox} type="checkbox" ref={refLink} />
        <div className={styles.filling} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
