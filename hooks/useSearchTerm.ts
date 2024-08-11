import { useEffect, useState } from 'react';

export function useSearchTerm(): [string, (searchTerm: string) => void] {
  const [value, setValue] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('dialecticallaw-search-term');
    if (savedValue) setValue(savedValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('dialecticallaw-search-term', value);
  }, [value]);

  return [value, setValue];
}
