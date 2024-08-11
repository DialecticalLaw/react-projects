import { LoadingContext } from '../../store/LoadingContext';
import styles from './Pagination.module.css';
import { useContext } from 'react';

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
        {'<'}
      </button>
      <button
        type="button"
        onClick={() => {
          setPage((prev) => prev + 1);
          if (setLoading) setLoading(true);
        }}
        className={`${styles.btn} ${next ? styles.active : ''}`}
      >
        {'>'}
      </button>
    </form>
  );
}
