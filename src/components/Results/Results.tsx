import styles from './Results.module.css';
import { Item } from './Item/Item';
import { extractId } from '../../helpers/extractId';
import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import { Planet } from '../../interfaces';

export function Results({ items }: { items?: Planet[] }) {
  const { theme } = useContext(ThemeContext);
  if (!items || !items.length) {
    return <p className={`${styles.text} ${theme === 'light' ? styles.light : ''}`}>Nothing was found</p>;
  }

  return (
    <section className={styles.results_section}>
      {items.map((item) => (
        <Item item={item} key={extractId(item.url)} />
      ))}
    </section>
  );
}
