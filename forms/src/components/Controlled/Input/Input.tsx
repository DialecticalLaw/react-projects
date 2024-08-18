import { useFormContext } from 'react-hook-form';
import styles from './Input.module.css';

export function Input({
  type,
  label,
  classes,
  name,
  value,
  list,
  id,
  placeholder,
  onChange
}: {
  type: 'text' | 'password' | 'number';
  label: string;
  classes?: string[];
  name: string;
  value?: string;
  list?: string;
  id: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { register, formState } = useFormContext();
  const error = formState.errors[name]?.message as string | undefined;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        {...register(name, {
          onChange(e: React.ChangeEvent<HTMLInputElement>) {
            if (onChange) onChange(e);
          }
        })}
        id={id}
        className={`${styles.input} ${classes?.join(' ')}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        list={list}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
