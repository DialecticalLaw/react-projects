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
  return (
    <form className={styles.wrapper}>
      <button
        type="button"
        onClick={() => setPage((prev) => prev - 1)}
        className={`${styles.btn} ${prev ? styles.active : ''}`}
      >
        &larr;
      </button>
      <button
        type="button"
        onClick={() => setPage((prev) => prev + 1)}
        className={`${styles.btn} ${next ? styles.active : ''}`}
      >
        &rarr;
      </button>
    </form>
  );
}
