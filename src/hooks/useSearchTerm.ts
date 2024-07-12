import { useState } from 'react';

export function useSearchTerm() {
  const [value, setValue] = useState(localStorage.getItem('dialecticallaw-search-term') || '');

  function saveSearchTerm(searchTerm: string) {
    localStorage.setItem('dialecticallaw-search-term', searchTerm);
    setValue(searchTerm);
  }
  return [value, saveSearchTerm];
}
