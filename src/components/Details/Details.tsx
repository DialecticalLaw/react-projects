import styles from './Details.module.css';
import { useContext, useRef } from 'react';
import { Button } from '../Button/Button';
import { ThemeContext } from '../../store/ThemeContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { Planet } from '../../interfaces';
import { LoadingContext } from '../../store/LoadingContext';
import { Loader } from '../Loader/Loader';

export function Details({ data }: { data: Planet }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { theme } = useContext(ThemeContext);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const { isLoading } = useContext(LoadingContext);

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('details');
    replace(`/?${params.toString()}`);
  };

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
