import styles from './Results.module.css';
import { useSearchParams } from 'react-router-dom';
import { extractId } from '../../helpers/extractId';
import { Planet } from '../../services/planets';

export function Results({ items }: { items?: Planet[] }) {
  const [, setSearchParams] = useSearchParams();

  if (!items || !items.length) return <p className={styles.text}>Nothing was found</p>;

  return (
    <section className={styles.results_section}>
      {items.map((item) => {
        return (
          <div
            key={item.name}
            className={styles.item}
            onClick={() =>
              setSearchParams((prev) => {
                prev.set('details', extractId(item.url));
                return prev;
              })
            }
          >
            <h1 className={styles.item_title}>{item.name}</h1>

            <p className={styles.item_prop}>
              Population: <span className={styles.item_value}>{item.population}</span>
            </p>
            <p className={styles.item_prop}>
              Terrain: <span className={styles.item_value}>{item.terrain}</span>
            </p>
          </div>
        );
      })}
    </section>
  );
}
