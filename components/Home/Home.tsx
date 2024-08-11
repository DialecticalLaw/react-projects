import { useContext, useEffect, useState } from 'react';
import { ApiResponse, Planet } from '../../interfaces';
import styles from './Home.module.css';
import { useSearchTerm } from '../../hooks/useSearchTerm';
import { LoadingContext } from 'store/LoadingContext';
import { ThemeContext } from '../../store/ThemeContext';
import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch';
import { useSearchParams } from '@remix-run/react';
import { Search } from '../../components/Search/Search';
import { Pagination } from '../../components/Pagination/Pagination';
import { Loader } from '../../components/Loader/Loader';
import { Results } from '../../components/Results/Results';
import { Details } from '../../components/Details/Details';
import { SelectedItemsFlyout } from 'components/SelectedItemsFlyout/SelectedItemsFlyout';

export function Home({ apiRes, detailsRes }: { apiRes: ApiResponse; detailsRes?: Planet }) {
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const { isLoading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (setLoading) setLoading(false);
  }, [setLoading, apiRes, detailsRes]);

  useEffect(() => {
    if (page.toString() !== searchParams.get('page') || searchTerm !== searchParams.get('search')) {
      setSearchParams((prev) => {
        prev.set('page', page.toString());
        prev.set('search', searchTerm);
        return prev;
      });
    }
  }, [page, searchParams, searchTerm, setSearchParams]);

  console.log(apiRes, detailsRes);

  const prev = apiRes?.previous || null;
  const next = apiRes?.next || null;
  const details = searchParams.get('details');

  return (
    <div className={`${styles.app} ${theme === 'light' ? styles.light : ''}`}>
      <ThemeSwitch />
      <Search setPage={setPage} initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} />

      <p className={styles.text}>Page: {page}</p>
      {!isLoading && Boolean(apiRes?.results?.length) && (
        <Pagination prev={prev} next={next} setPage={setPage} />
      )}
      <div className={styles.wrapper}>
        {isLoading ? <Loader /> : <Results items={apiRes?.results} />}
        {details && detailsRes && <Details data={detailsRes} />}
      </div>
      <SelectedItemsFlyout />
    </div>
  );
}
