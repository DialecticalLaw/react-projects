import { useContext, useEffect, useState } from 'react';
import { Planet } from '../../../../services/planets';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addItem, removeItem } from '../../../../store/slices/selected_items_slice';
import styles from './SelectCheckbox.module.css';
import { ThemeContext } from '../../../../store/ThemeContext';

export function SelectCheckbox({ item }: { item: Planet }) {
  const selectedItems = useAppSelector((state) => state.selectedItems.items);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedItems.find((selectedItem) => selectedItem.url === item.url)) {
      setSelected(true);
    } else setSelected(false);
  }, [item.url, selectedItems]);

  const toggleSelection = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const eventTarget = e.target;
    if (!(eventTarget instanceof HTMLInputElement)) return;
    if (eventTarget.checked) {
      dispatch(addItem(item));
    } else dispatch(removeItem(item.url));
  };

  return (
    <div className={styles.absolute_wrapper}>
      <div className={`${styles.relative_wrapper} ${theme === 'light' ? styles.light : ''}`}>
        <input
          checked={isSelected}
          className={styles.checkbox}
          type="checkbox"
          onClick={(e) => {
            e.stopPropagation();
            toggleSelection(e);
          }}
        />
        <div className={styles.filling} />
      </div>
    </div>
  );
}
