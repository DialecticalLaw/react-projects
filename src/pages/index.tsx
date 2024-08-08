import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ApiResponse, Planet } from '../interfaces';
import { useContext, useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { useSearchTerm } from '../hooks/useSearchTerm';
import Head from 'next/head';
import { ThemeSwitch } from '../components/ThemeSwitch/ThemeSwitch';
import { Search } from '../components/Search/Search';
import { Pagination } from '../components/Pagination/Pagination';
import { Results } from '../components/Results/Results';
import { Loader } from '../components/Loader/Loader';
import styles from './App.module.css';
import { ThemeContext } from '../store/ThemeContext';
import { Details } from '../components/Details/Details';
import { SelectedItemsFlyout } from '../components/SelectedItemsFlyout/SelectedItemsFlyout';

export const getServerSideProps: GetServerSideProps<{ apiRes: ApiResponse; detailsRes?: Planet }> = async (
  context
) => {
  const page = context.query.page || 1;
  const details = context.query.details;
  const search = context.query.search || '';

  const result: { apiRes: ApiResponse; detailsRes?: Planet } = {
    apiRes: await (await fetch(`https://swapi.dev/api/planets/?page=${page}&search=${search}`)).json()
  };

  if (details) {
    result.detailsRes = await (await fetch(`https://swapi.dev/api/planets/${details}`)).json();
  }

  return { props: result };
};

export default function Page({ apiRes, detailsRes }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const { query, replace } = useRouter();
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState(Number(query.page) || 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
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
    if (page !== Number(query.page) || searchTerm !== query.search) {
      replace({
        query: { ...query, page, search: searchTerm }
      });
    }
  }, [page, query, query.page, replace, searchTerm]);

  const prev = apiRes?.previous || null;
  const next = apiRes?.next || null;

  return (
    <>
      <Head>
        <title>Star Wars - Planets search</title>
      </Head>
      <div className={`${styles.app} ${theme === 'light' ? styles.light : ''}`}>
        <ThemeSwitch />
        <Search setPage={setPage} initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} />

        <p className={styles.text}>Page: {page}</p>
        {!loading && apiRes?.results?.length && <Pagination prev={prev} next={next} setPage={setPage} />}

        <div className={styles.wrapper}>
          {loading ? <Loader /> : <Results items={apiRes?.results} />}
          {query.details && detailsRes && <Details data={detailsRes} isLoading={loading} />}
        </div>
        <SelectedItemsFlyout />
      </div>
    </>
  );
}
