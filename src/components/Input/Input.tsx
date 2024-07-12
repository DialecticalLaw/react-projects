import styles from './Input.module.css';

export function Input({
  type,
  placeholder,
  classes,
  autoFocus,
  refLink
}: {
  type: 'text' | 'search';
  placeholder: string;
  classes?: string[];
  autoFocus?: boolean;
  refLink?: React.RefObject<HTMLInputElement>;
}) {
  return (
    <input
      className={`${styles.input} ${classes?.join(' ')}`}
      ref={refLink}
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
}
