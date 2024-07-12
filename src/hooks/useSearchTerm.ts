import { useState } from 'react';

export function useSearchTerm(): [string, (searchTerm: string) => void] {
  const [value, setValue] = useState(localStorage.getItem('dialecticallaw-search-term') || '');

  const saveSearchTerm = (searchTerm: string) => {
    console.log('callback');
    localStorage.setItem('dialecticallaw-search-term', searchTerm);
    setValue(searchTerm);
  };
  return [value, saveSearchTerm];
}
