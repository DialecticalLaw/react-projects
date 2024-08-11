import { useContext, useEffect, useState } from 'react';
import styles from './SelectCheckbox.module.css';
import { ThemeContext } from '../../../../store/ThemeContext';
import { Planet } from '../../../../interfaces';
import { SelectedItemsContext } from '../../../../store/SelectedItemsContext';

export function SelectCheckbox({ item }: { item: Planet }) {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const { theme } = useContext(ThemeContext);
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedItems.find((selectedItem) => selectedItem.url === item.url)) {
      setSelected(true);
    } else setSelected(false);
  }, [item.url, selectedItems]);

  const toggleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = e.target;
    if (!(eventTarget instanceof HTMLInputElement)) return;
    if (!setSelectedItems) throw new Error('setSelectedItems is undefined');
    if (eventTarget.checked) {
      setSelectedItems(selectedItems.concat([item]));
    } else setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.url !== item.url));
  };

  return (
    <div className={styles.absolute_wrapper}>
      <div className={`${styles.relative_wrapper} ${theme === 'light' ? styles.light : ''}`}>
        <input
          checked={isSelected}
          className={styles.checkbox}
          type="checkbox"
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            toggleSelection(e);
          }}
        />
        <div className={styles.filling} />
      </div>
    </div>
  );
}
