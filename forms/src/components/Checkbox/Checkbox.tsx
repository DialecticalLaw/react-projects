import styles from './Checkbox.module.css';

export function Checkbox({ refLink }: { refLink?: React.RefObject<HTMLInputElement> }) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.checkbox} type="checkbox" ref={refLink} />
      <div className={styles.filling} />
    </div>
  );
}
