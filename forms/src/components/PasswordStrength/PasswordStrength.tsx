import { ValidationError } from 'yup';
import styles from './PasswordStrength.module.css';

export function PasswordStrength({ strengthErrors }: { strengthErrors?: ValidationError[] | 'init' }) {
  const strengthLevels = {
    0: styles.empty,
    1: styles.weak,
    2: styles.medium,
    3: styles.strong,
    4: styles.very_strong
  };

  const level = (
    strengthErrors === 'init' ? 0 : 4 - (strengthErrors?.length || 0)
  ) as keyof typeof strengthLevels;

  return (
    <>
      <div className={`${styles.wrapper} ${strengthLevels[level]}`}>
        <div className={styles.cell} />
        <div className={styles.cell} />
        <div className={styles.cell} />
        <div className={styles.cell} />
      </div>
      {typeof strengthErrors === 'object' &&
        strengthErrors?.map((err) => (
          <p className={styles.error} key={err.message}>
            {err.message}
          </p>
        ))}
    </>
  );
}
