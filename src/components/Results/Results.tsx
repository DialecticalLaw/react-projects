import styles from './Results.module.css';
import { Planet } from '../../services/API_service';

export function Results({ items }: { items: Planet[] }) {
  return (
    <section className={styles.results_section}>
      {items.map((item) => {
        return (
          <div key={item.name} className={styles.item}>
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
