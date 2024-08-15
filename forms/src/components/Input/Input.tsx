import styles from './Input.module.css';

export function Input({
  type,
  placeholder,
  classes,
  autoFocus,
  refLink,
  defaultValue,
  name,
  value,
  list
}: {
  type: 'text' | 'password' | 'number' | 'email';
  placeholder?: string;
  classes?: string[];
  autoFocus?: boolean;
  refLink?: React.RefObject<HTMLInputElement>;
  defaultValue?: string;
  name?: string;
  value?: string;
  list?: string;
}) {
  return (
    <input
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
  );
}
