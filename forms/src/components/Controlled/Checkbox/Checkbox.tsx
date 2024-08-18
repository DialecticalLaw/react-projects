import { ReactNode } from 'react';
import styles from './Checkbox.module.css';
import { useFormContext } from 'react-hook-form';

export function Checkbox({ label, id, name }: { id: string; label: ReactNode; name: string }) {
  const { register, formState } = useFormContext();
  const error = formState.errors[name]?.message as string | undefined;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.checkbox_wrapper}>
        <input {...register(name)} id={id} className={styles.checkbox} type="checkbox" />
        <div className={styles.filling} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
