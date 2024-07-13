import { useSearchParams } from 'react-router-dom';
import styles from './Details.module.css';
import { useEffect, useState } from 'react';
import { Planet, searchItem } from '../../services/API_service';
import { Loader } from '../Loader/Loader';

export function Details() {
  const [searchParams] = useSearchParams();
  const [isActive, setActive] = useState(false);
  const [item, setItem] = useState<Planet>();

  useEffect(() => {
    const id = searchParams.get('details');

    if (id) {
      const getItem = async () => {
        setActive(true);
        const result = await searchItem(id);
        setItem(result);
      };

      getItem();
    }
  }, [searchParams]);

  return (
    <section className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
      {item ? (
        <>
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
