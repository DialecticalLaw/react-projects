import styles from './Pagination.module.css';

export function Pagination({
  prev,
  next,
  setPage
}: {
  prev: string | null;
  next: string | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  if (!prev && !next) return;

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setPage((page) => page - 1)}
        className={`${styles.btn} ${prev ? styles.active : ''}`}
      >
        &larr;
      </button>
      <button
        onClick={() => setPage((page) => page + 1)}
        className={`${styles.btn} ${next ? styles.active : ''}`}
      >
        &rarr;
      </button>
    </div>
  );
}
