import { useAppSelector } from '../../store/hooks';
import { Button } from '../Button/Button';
import styles from './SelectedItemsFlyout.module.css';

export function SelectedItemsFlyout() {
  const selectedItems = useAppSelector((state) => state.selectedItems.items);

  return (
    <div className={`${styles.wrapper} ${selectedItems.length ? styles.visible : ''}`}>
      {selectedItems.length && (
        <>
          <p className={styles.text}>
            <span className={styles.accent}>{selectedItems.length}</span> items are selected
          </p>
          <Button type="button">Unselect all</Button>
          <Button type="button">Download</Button>
        </>
      )}
    </div>
  );
}
