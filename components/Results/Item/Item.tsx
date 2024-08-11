import { useContext } from 'react';
import { extractId } from '../../../helpers/extractId';
import { ThemeContext } from '../../../store/ThemeContext';
import styles from './Item.module.css';
import { useSearchParams } from 'react-router-dom';
// import { SelectCheckbox } from './SelectCheckbox/SelectCheckbox';
import { Planet } from '../../../interfaces';

export function Item({ item }: { item: Planet }) {
  const [, setSearchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.item} ${theme === 'light' ? styles.light : ''}`}
      onClick={() =>
        setSearchParams((prev) => {
          prev.set('details', extractId(item.url));
          return prev;
        })
      }
    >
      {/* <SelectCheckbox item={item} /> */}
      <h1 className={styles.item_title}>{item.name}</h1>

      <p className={styles.item_prop}>
        Population: <span className={styles.item_value}>{item.population}</span>
      </p>
      <p className={styles.item_prop}>
        Terrain: <span className={styles.item_value}>{item.terrain}</span>
      </p>
    </div>
  );
}