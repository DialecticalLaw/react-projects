import styles from './SelectCheckbox.module.css';

export function SelectCheckbox() {
  return (
    <div className={styles.absolute_wrapper}>
      <div className={styles.relative_wrapper}>
        <input className={styles.checkbox} type="checkbox" onClick={(e) => e.stopPropagation()} />
        <div className={styles.filling} />
      </div>
    </div>
  );
}
