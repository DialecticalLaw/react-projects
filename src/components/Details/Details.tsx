import { useSearchParams } from 'react-router-dom';
import styles from './Details.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Planet, searchItem } from '../../services/API_service';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

export function Details() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const [item, setItem] = useState<Planet>();
  const detailsRef = useRef<HTMLElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const detailsId = searchParams.get('details');

  const handleClose = useCallback(() => {
    setSearchParams((prev) => {
      prev.delete('details');
      return prev;
    });
  }, [setSearchParams]);

  useEffect(() => {
    if (detailsId) {
      setLoading(true);
      const getItem = async () => {
        const result = await searchItem(detailsId);
        setItem(result);
        setLoading(false);
      };

      getItem();
    }
  }, [detailsId]);

  return (
    <>
      <div className={styles.close_handler} onClick={handleClose} />
      <section ref={detailsRef} className={styles.wrapper}>
        {!isLoading && item ? (
          <>
            <h2 className={styles.title}>{item.name}</h2>
            <p>Climate: {item.climate}</p>
            <p>Diameter: {item.diameter}</p>
            <p>Gravity: {item.gravity}</p>
            <p>Surface water: {item.surface_water}</p>
            <p>Rotation period: {item.rotation_period}</p>
            <p>Orbital period: {item.orbital_period}</p>
            <Button refLink={closeBtnRef} onClick={handleClose} type="button">
              Close
            </Button>
          </>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}
