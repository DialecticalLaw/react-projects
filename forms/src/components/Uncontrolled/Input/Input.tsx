import styles from './Input.module.css';

export function Input({
  type,
  label,
  classes,
  refLink,
  list,
  id,
  placeholder,
  error
}: {
  type: 'text' | 'password' | 'number';
  label: string;
  classes?: string[];
  refLink?: React.RefObject<HTMLInputElement>;
  list?: string;
  id: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`${styles.input} ${classes?.join(' ')}`}
        ref={refLink}
        type={type}
        placeholder={placeholder}
        list={list}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
