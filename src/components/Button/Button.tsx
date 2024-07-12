import styles from './Button.module.css';

export function Button({
  children,
  type,
  classes,
  onClick
}: {
  children: JSX.Element | string;
  type: 'button' | 'submit';
  classes?: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button onClick={onClick} type={type} className={`${styles.btn} ${classes?.join(' ')}`}>
      {children}
    </button>
  );
}
