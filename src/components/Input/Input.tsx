import styles from './Input.module.css';

export function Input({
  type,
  placeholder,
  classes,
  autoFocus,
  refLink,
  defaultValue
}: {
  type: 'text' | 'search';
  placeholder: string;
  classes?: string[];
  autoFocus?: boolean;
  refLink?: React.RefObject<HTMLInputElement>;
  defaultValue?: string;
}) {
  return (
    <input
      className={`${styles.input} ${classes?.join(' ')}`}
      ref={refLink}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
}
