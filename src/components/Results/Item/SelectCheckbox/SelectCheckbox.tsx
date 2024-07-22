import { useContext } from 'react';
import { Planet } from '../../../../services/planets';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addItem, removeItem } from '../../../../store/slices/selected_items_slice';
import styles from './SelectCheckbox.module.css';
import { ThemeContext } from '../../../../store/ThemeContext';

export function SelectCheckbox({ item }: { item: Planet }) {
  const selectedItems = useAppSelector((state) => state.selectedItems.items);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const isDefaultChecked = Boolean(selectedItems.find((selectedItem) => selectedItem.url === item.url));

  const toggleSelection = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const eventTaget = e.target;
    if (!(eventTaget instanceof HTMLInputElement)) return;
    if (eventTaget.checked) {
      dispatch(addItem(item));
    } else dispatch(removeItem(item.url));
  };

  return (
    <div className={styles.absolute_wrapper}>
      <div className={`${styles.relative_wrapper} ${theme === 'light' ? styles.light : ''}`}>
        <input
          defaultChecked={isDefaultChecked}
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
