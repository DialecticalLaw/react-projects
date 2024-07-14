import { useSearchParams } from 'react-router-dom';
import styles from './Details.module.css';
import { useEffect, useState } from 'react';
import { Planet, searchItem } from '../../services/API_service';
import { Loader } from '../Loader/Loader';

export function Details() {
  const [searchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const [item, setItem] = useState<Planet>();
  const detailsId = searchParams.get('details');

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
    <section className={styles.wrapper}>
      {!isLoading && item ? (
        <>
          <h2 className={styles.title}>{item.name}</h2>
          <p>Climate: {item.climate}</p>
          <p>Diameter: {item.diameter}</p>
          <p>Gravity: {item.gravity}</p>
          <p>Surface water: {item.surface_water}</p>
          <p>Rotation period: {item.rotation_period}</p>
          <p>Orbital period: {item.orbital_period}</p>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}
