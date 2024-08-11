import { useContext } from 'react';
import styles from './Pagination.module.css';
import { LoadingContext } from '../../store/LoadingContext';

export function Pagination({
  prev,
  next,
  setPage
}: {
  prev: string | null;
  next: string | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { setLoading } = useContext(LoadingContext);

  return (
    <form className={styles.wrapper}>
      <button
        type="button"
        onClick={() => {
          setPage((prev) => prev - 1);
          if (setLoading) setLoading(true);
        }}
        className={`${styles.btn} ${prev ? styles.active : ''}`}
      >
        &larr;
      </button>
      <button
        type="button"
        onClick={() => {
          setPage((prev) => prev + 1);
          if (setLoading) setLoading(true);
        }}
        className={`${styles.btn} ${next ? styles.active : ''}`}
      >
        &rarr;
      </button>
    </form>
  );
}
