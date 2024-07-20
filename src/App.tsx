import { useEffect, useState } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { Loader } from './components/Loader/Loader';
import { ErrorThrower } from './components/ErrorThrower/ErrorThrower';
import { useSearchTerm } from './hooks/useSearchTerm';
import { Pagination } from './components/Pagination/Pagination';
import { Outlet, useSearchParams } from 'react-router-dom';
import styles from './App.module.css';
import { planetsApi } from './services/planets';

export function App() {
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const { data, isFetching } = planetsApi.useGetItemsQuery({ searchTerm, page });
  const details = searchParams.get('details');

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set('page', page.toString());
      return prev;
    });
  }, [page, setSearchParams]);

  const prev = data?.previous || null;
  const next = data?.next || null;

  return (
    <>
      <Search
        setPage={setPage}
        isFetching={isFetching}
        initialSearchTerm={searchTerm}
        saveSearchTerm={saveSearchTerm}
      />
      <ErrorThrower />

      <p className={styles.text}>Page: {page}</p>
      <div className={styles.wrapper}>
        {isFetching ? <Loader /> : <Results items={data?.results} />}
        {details && <Outlet />}
      </div>

      {data && !isFetching && <Pagination prev={prev} next={next} setPage={setPage} />}
    </>
  );
}
