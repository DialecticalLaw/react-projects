import styles from './Details.module.css';
import { useContext, useRef } from 'react';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { ThemeContext } from '../../store/ThemeContext';
import { useRouter } from 'next/router';
import { Planet } from '../../interfaces';

export function Details({ data, isLoading }: { data: Planet; isLoading: boolean }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { theme } = useContext(ThemeContext);
  const { query, replace } = useRouter();

  const handleClose = () => {
    replace({ query: { page: query.page } });
  };

  console.log(data);

  return (
    <>
      <div className={styles.close_handler} onClick={handleClose} />
      <section className={`${styles.wrapper} ${theme === 'light' ? styles.light : ''}`}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h2 className={styles.title}>{data.name}</h2>
            <p className={styles.text}>Climate: {data.climate}</p>
            <p className={styles.text}>Diameter: {data.diameter}</p>
            <p className={styles.text}>Gravity: {data.gravity}</p>
            <p className={styles.text}>Surface water: {data.surface_water}</p>
            <p className={styles.text}>Rotation period: {data.rotation_period}</p>
            <p className={styles.text}>Orbital period: {data.orbital_period}</p>

            <Button refLink={closeBtnRef} onClick={handleClose} type="button">
              Close
            </Button>
          </>
        )}
      </section>
    </>
  );
}
