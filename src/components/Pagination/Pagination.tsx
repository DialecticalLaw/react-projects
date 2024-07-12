import styles from './Pagination.module.css';

export function Pagination({ prev, next }: { prev: string | null; next: string | null }) {
  if (!prev && !next) return;

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.btn} ${prev ? styles.active : ''}`}>&larr;</button>
      <button className={`${styles.btn} ${next ? styles.active : ''}`}>&rarr;</button>
    </div>
  );
}
