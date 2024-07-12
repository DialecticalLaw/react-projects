import { useEffect, useState } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { Planet, searchItems } from './services/API_service';
import { Loader } from './components/Loader/Loader';
import { ErrorThrower } from './components/ErrorThrower/ErrorThrower';
import { useSearchTerm } from './hooks/useSearchTerm';

export function App() {
  const [items, setItems] = useState<Planet[]>([]);
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const items = await searchItems(searchTerm);
      setItems(items);
      setIsLoading(false);
    };

    fetchItems();
  }, [searchTerm]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Search initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} />
      <ErrorThrower />
      <Results items={items} />
    </>
  );
}
