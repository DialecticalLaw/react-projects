import type { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '.';
import styles from './App.module.css';
import './styles.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useSearchTerm } from '../hooks/useSearchTerm';
import { ThemeContext } from '../store/ThemeContext';
import { Router, useRouter } from 'next/router';
import { ThemeSwitch } from '../components/ThemeSwitch/ThemeSwitch';
import { Search } from '../components/Search/Search';
import { Results } from '../components/Results/Results';
import { Details } from '../components/Details/Details';
import { Pagination } from '../components/Pagination/Pagination';
import { Loader } from '../components/Loader/Loader';

export default function AppPage({
  pageProps,
  Component
}: AppProps<InferGetServerSidePropsType<typeof getServerSideProps>>) {
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { query, replace } = useRouter();
  const [page, setPage] = useState(Number(query.page) || 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('finished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  useEffect(() => {
    if (page !== Number(query.page)) {
      replace({
        query: { page: page }
      });
    }
  }, [page, query.page, replace]);

  console.log(pageProps.apiRes);

  const prev = pageProps.apiRes?.previous || null;
  const next = pageProps.apiRes?.next || null;

  return (
    <>
      <Component />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${styles.app} ${theme === 'light' ? styles.light : ''}`}>
          <ThemeSwitch />
          <Search setPage={setPage} initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} />

          <p className={styles.text}>Page: {page}</p>
          {pageProps.apiRes?.results?.length && <Pagination prev={prev} next={next} setPage={setPage} />}

          <div className={styles.wrapper}>
            {loading ? <Loader /> : <Results items={pageProps.apiRes.results} />}
            {loading && query.details ? <Loader /> : query.details && <Details />}
          </div>
          {/* <SelectedItemsFlyout /> */}
        </div>
      </ThemeContext.Provider>
    </>
  );
}
