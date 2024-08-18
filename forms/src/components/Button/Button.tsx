import { ReactNode } from 'react';
import styles from './Button.module.css';

export function Button({
  children,
  type,
  classes,
  onClick,
  disabled
}: {
  children: ReactNode;
  type: 'button' | 'submit';
  classes?: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${styles.btn} ${classes?.join(' ')}`}
    >
      {children}
    </button>
  );
}
