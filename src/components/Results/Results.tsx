import styles from './Results.module.css';
import { Film } from '../../services/API_service';

export function Results({ items }: { items: Film[] }) {
  return (
    <section className={styles.results_section}>
      {items.map((item) => {
        return (
          <div key={item.release_date} className={styles.item}>
            <h1 className={styles.item_title}>{item.title}</h1>

            <p className={styles.item_prop}>
              Director: <span className={styles.item_value}>{item.director}</span>
            </p>
            <p className={styles.item_prop}>
              Release: <span className={styles.item_value}>{item.release_date}</span>
            </p>
          </div>
        );
      })}
    </section>
  );
}
