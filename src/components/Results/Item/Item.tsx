import { useContext } from 'react';
import { extractId } from '../../../helpers/extractId';
import { ThemeContext } from '../../../store/ThemeContext';
import styles from './Item.module.css';
import { SelectCheckbox } from './SelectCheckbox/SelectCheckbox';
import { Planet } from '../../../interfaces';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoadingContext } from '../../../store/LoadingContext';

export function Item({ item }: { item: Planet }) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useContext(ThemeContext);
  const { setLoading } = useContext(LoadingContext);

  return (
    <div
      className={`${styles.item} ${theme === 'light' ? styles.light : ''}`}
      onClick={() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('details', extractId(item.url));
        if (setLoading) setLoading(true);
        replace(`/?${params.toString()}`);
      }}
    >
      <SelectCheckbox item={item} />
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
