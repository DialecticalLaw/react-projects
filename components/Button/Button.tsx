import { useContext } from 'react';
import styles from './Button.module.css';
import { ThemeContext } from '../../store/ThemeContext';

export function Button({
  children,
  type,
  classes,
  onClick,
  refLink
}: {
  children: JSX.Element | string;
  type: 'button' | 'submit';
  classes?: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  refLink?: React.RefObject<HTMLButtonElement>;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      ref={refLink}
      onClick={onClick}
      type={type}
      className={`${styles.btn} ${classes?.join(' ')} ${theme === 'light' ? styles.light : ''}`}
    >
      {children}
    </button>
  );
}
