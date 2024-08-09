'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useSearchTerm } from '../../hooks/useSearchTerm';
import styles from './Home.module.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { Search } from '../Search/Search';
import { Pagination } from '../Pagination/Pagination';
import { Results } from '../Results/Results';
import { Details } from '../Details/Details';
import { SelectedItemsFlyout } from '../SelectedItemsFlyout/SelectedItemsFlyout';
import { ApiResponse, Planet } from '../../interfaces';
import { Loader } from '../Loader/Loader';
import { LoadingContext } from '../../store/LoadingContext';

export default function Home({ apiRes, detailsRes }: { apiRes: ApiResponse; detailsRes?: Planet }) {
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const { isLoading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (setLoading) setLoading(false);
  }, [setLoading, apiRes, detailsRes]);

  useEffect(() => {
    if (page.toString() !== searchParams.get('page') || searchTerm !== searchParams.get('search')) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', page.toString());
      params.set('search', searchTerm);
      replace(`/?${params.toString()}`);
    }
  }, [page, replace, searchParams, searchTerm]);

  const prev = apiRes?.previous || null;
  const next = apiRes?.next || null;
  const details = searchParams.get('details');
  console.log(apiRes, detailsRes);

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
