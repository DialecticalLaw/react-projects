import { useEffect, useState } from 'react';
import { convertToCsv } from '../../helpers/convertToCsv';
import { Button } from '../Button/Button';
import styles from './SelectedItemsFlyout.module.css';

export function SelectedItemsFlyout() {
  const selectedItems = useAppSelector((state) => state.selectedItems.items);
  const [href, setHref] = useState('');
  // const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedItems.length) return;
    const link = convertToCsv(selectedItems);
    setHref(link);
    return () => URL.revokeObjectURL(link);
  }, [selectedItems]);

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

          <Button classes={[styles.btn]} type="button">
            <a href={href} download={`${selectedItems.length}_planets.csv`} className={styles.download_link}>
              Download
            </a>
          </Button>
        </>
      )}
    </div>
  );
}
