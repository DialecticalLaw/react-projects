import { createContext } from 'react';
import { Planet } from '../interfaces';

export const SelectedItemsContext = createContext<{
  selectedItems: Planet[];
  setSelectedItems?: React.Dispatch<React.SetStateAction<Planet[]>>;
}>({ selectedItems: [] });
