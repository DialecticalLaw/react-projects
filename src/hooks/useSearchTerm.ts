import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// export function useSearchTerm(): [string, (searchTerm: string) => void] {
//   const [value, setValue] = useState('');
//   const { replace } = useRouter();

//   useEffect(() => {
//     setValue(localStorage.getItem('dialecticallaw-search-term') || '');
//     console.log('search term');
//   }, []);

//   const saveSearchTerm = (searchTerm: string) => {
//     localStorage.setItem('dialecticallaw-search-term', searchTerm);
//     setValue(searchTerm);
//   };
//   return [value, saveSearchTerm];
// }

export function useSearchTerm(): [string, (searchTerm: string) => void] {
  const [value, setValue] = useState('');
  const { replace, query } = useRouter();

  useEffect(() => {
    const savedValue = localStorage.getItem('dialecticallaw-search-term');
    if (savedValue) setValue(savedValue);
    console.log('1');
  }, []);

  useEffect(() => {
    localStorage.setItem('dialecticallaw-search-term', value);
    console.log('2');
  }, [query, replace, value]);

  return [value, setValue];
}
