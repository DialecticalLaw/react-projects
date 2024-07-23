import { useSearchParams } from 'react-router-dom';
import styles from './Details.module.css';
import { useCallback, useContext, useRef } from 'react';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { planetsApi } from '../../services/planets';
import { ThemeContext } from '../../store/ThemeContext';

export function Details() {
  const [searchParams, setSearchParams] = useSearchParams();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { theme } = useContext(ThemeContext);
  const detailsId = searchParams.get('details');
  const { data, isFetching } = planetsApi.useGetItemByIdQuery(detailsId);

  const handleClose = useCallback(() => {
    setSearchParams((prev) => {
      prev.delete('details');
      return prev;
    });
  }, [setSearchParams]);

  return (
    <>
      <div className={styles.close_handler} onClick={handleClose} />
      <section className={`${styles.wrapper} ${theme === 'light' ? styles.light : ''}`}>
        {isFetching ? (
          <Loader />
        ) : (
          data && (
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
          )
        )}
      </section>
    </>
  );
}
