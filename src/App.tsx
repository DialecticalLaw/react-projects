import { useEffect, useState } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { ApiResponse, searchItems } from './services/API_service';
import { Loader } from './components/Loader/Loader';
import { ErrorThrower } from './components/ErrorThrower/ErrorThrower';
import { useSearchTerm } from './hooks/useSearchTerm';
import { Pagination } from './components/Pagination/Pagination';
import { Outlet, useSearchParams } from 'react-router-dom';
import styles from './App.module.css';

export function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')));

  useEffect(() => {
    if (!page) {
      setPage(1);
    } else {
      const fetchItems = async () => {
        setIsLoading(true);
        setSearchParams({ page: page.toString() });
        const response = await searchItems(searchTerm, page);
        if (response) setApiResponse(response);
        setIsLoading(false);
      };

      fetchItems();
    }
  }, [page, searchTerm, setSearchParams]);

  const prev = apiResponse?.previous || null;
  const next = apiResponse?.next || null;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Search initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} />
      <ErrorThrower />

      {apiResponse?.results?.length ? (
        <>
          <p className={styles.text}>Page: {page}</p>
          <div className={styles.wrapper}>
            <Results items={apiResponse.results} />
            <Outlet />
          </div>
        </>
      ) : (
        <p className={styles.text}>Nothing was found</p>
      )}
      {apiResponse && <Pagination prev={prev} next={next} setPage={setPage} />}
    </>
  );
}
