import { useSearchParams } from 'react-router-dom';
import styles from './Details.module.css';
import { useCallback, useRef } from 'react';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { planetsApi } from '../../services/planets';

export function Details() {
  const [searchParams, setSearchParams] = useSearchParams();
  const detailsRef = useRef<HTMLElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const detailsId = searchParams.get('details');
  const { data, isLoading } = planetsApi.useGetItemByIdQuery(detailsId);

  const handleClose = useCallback(() => {
    setSearchParams((prev) => {
      prev.delete('details');
      return prev;
    });
  }, [setSearchParams]);

  return (
    <>
      <div className={styles.close_handler} onClick={handleClose} />
      <section ref={detailsRef} className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          data && (
            <>
              <h2 className={styles.title}>{data.name}</h2>
              <p>Climate: {data.climate}</p>
              <p>Diameter: {data.diameter}</p>
              <p>Gravity: {data.gravity}</p>
              <p>Surface water: {data.surface_water}</p>
              <p>Rotation period: {data.rotation_period}</p>
              <p>Orbital period: {data.orbital_period}</p>

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
