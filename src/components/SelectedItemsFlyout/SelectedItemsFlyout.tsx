import { useContext, useEffect, useState } from 'react';
import { convertToCsv } from '../../helpers/convertToCsv';
import styles from './SelectedItemsFlyout.module.css';
import { SelectedItemsContext } from '../../store/SelectedItemsContext';
import { Button } from '../Button/Button';

export function SelectedItemsFlyout() {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const [href, setHref] = useState('');

  useEffect(() => {
    if (!selectedItems.length) return;
    const link = convertToCsv(selectedItems);
    setHref(link);
    return () => URL.revokeObjectURL(link);
  }, [selectedItems]);

  if (!setSelectedItems) throw new Error('setSelectedItems is undefined');

  return (
    <div className={`${styles.wrapper} ${selectedItems.length ? styles.visible : ''}`}>
      {selectedItems.length && (
        <>
          <p className={styles.text}>
            <span className={styles.accent}>{selectedItems.length}</span> items are selected
          </p>

          <Button type="button" onClick={() => setSelectedItems([])}>
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
