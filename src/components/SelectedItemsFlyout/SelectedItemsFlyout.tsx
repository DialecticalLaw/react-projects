import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearSelectedItems } from '../../store/slices/selected_items_slice';
import { Button } from '../Button/Button';
import styles from './SelectedItemsFlyout.module.css';

export function SelectedItemsFlyout() {
  const selectedItems = useAppSelector((state) => state.selectedItems.items);
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.wrapper} ${selectedItems.length ? styles.visible : ''}`}>
      {selectedItems.length && (
        <>
          <p className={styles.text}>
            <span className={styles.accent}>{selectedItems.length}</span> items are selected
          </p>
          <Button type="button" onClick={() => dispatch(clearSelectedItems())}>
            Unselect all
          </Button>
          <Button type="button">Download</Button>
        </>
      )}
    </div>
  );
}
