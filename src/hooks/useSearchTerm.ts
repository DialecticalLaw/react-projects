import { useEffect, useState } from 'react';

export function useSearchTerm(): [string, (searchTerm: string) => void] {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(localStorage.getItem('dialecticallaw-search-term') || '');
    console.log('search term');
  }, []);

  const saveSearchTerm = (searchTerm: string) => {
    localStorage.setItem('dialecticallaw-search-term', searchTerm);
    setValue(searchTerm);
  };
  return [value, saveSearchTerm];
}
