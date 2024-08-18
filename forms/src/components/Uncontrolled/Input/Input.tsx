import styles from './Input.module.css';

export function Input({
  type,
  label,
  classes,
  autoFocus,
  refLink,
  defaultValue,
  name,
  value,
  list,
  id,
  placeholder,
  error
}: {
  type: 'text' | 'password' | 'number';
  label: string;
  classes?: string[];
  autoFocus?: boolean;
  refLink?: React.RefObject<HTMLInputElement>;
  defaultValue?: string;
  name: string;
  value?: string;
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
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        list={list}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
