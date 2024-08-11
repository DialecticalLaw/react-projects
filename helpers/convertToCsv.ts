import { Planet } from '../interfaces';
import { replaceComma } from './replaceComma';

export function convertToCsv(selectedItems: Planet[]) {
  const csvRows = [];
  const headers = Object.keys(selectedItems[0]).join(',');
  csvRows.push(headers);

  selectedItems.forEach((item) => {
    const values = replaceComma(Object.values(item)).join(',');
    csvRows.push(values);
  });

  const data = csvRows.join('\n');
  const blob = new Blob([data], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  return url;
}
