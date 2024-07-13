import { useEffect, useState } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { ApiResponse, searchItems } from './services/API_service';
import { Loader } from './components/Loader/Loader';
import { ErrorThrower } from './components/ErrorThrower/ErrorThrower';
import { useSearchTerm } from './hooks/useSearchTerm';
import { Pagination } from './components/Pagination/Pagination';

export function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>();
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await searchItems(searchTerm, page);
      if (response) setApiResponse(response);
      setIsLoading(false);
    };

    fetchItems();
  }, [searchTerm, page]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Search initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} />
      <ErrorThrower />
      {apiResponse?.results && <Results items={apiResponse.results} />}
      {apiResponse && <Pagination prev={apiResponse.previous} next={apiResponse.next} setPage={setPage} />}
    </>
  );
}
