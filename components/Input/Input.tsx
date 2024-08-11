import { useContext } from 'react';
import styles from './Input.module.css';
import { ThemeContext } from '../../store/ThemeContext';

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
  const { theme } = useContext(ThemeContext);

  return (
    <input
      className={`${styles.input} ${classes?.join(' ')} ${theme === 'light' ? styles.light : ''}`}
      ref={refLink}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
}
