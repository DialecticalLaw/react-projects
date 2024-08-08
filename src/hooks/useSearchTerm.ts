import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useSearchTerm(): [string, (searchTerm: string) => void] {
  const [value, setValue] = useState('');
  const { replace, query } = useRouter();

  useEffect(() => {
    const savedValue = localStorage.getItem('dialecticallaw-search-term');
    if (savedValue) setValue(savedValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('dialecticallaw-search-term', value);
  }, [query, replace, value]);

  return [value, setValue];
}
