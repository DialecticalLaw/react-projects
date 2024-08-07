// import { useSearchParams } from 'next/navigation';
import { useSearchTerm } from '../../hooks/useSearchTerm';
import { ApiResponse } from '../../interfaces';
import styles from './App.module.css';
import { useContext, useState } from 'react';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { Search } from '../Search/Search';
import { ErrorThrower } from '../ErrorThrower/ErrorThrower';
import { Pagination } from '../Pagination/Pagination';
import { Results } from '../Results/Results';
import { Details } from '../Details/Details';
// import { Loader } from '../Loader/Loader';
// import { SelectedItemsFlyout } from '../SelectedItemsFlyout/SelectedItemsFlyout';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { useRouter } from 'next/router';
import { ThemeContext } from '../../store/ThemeContext';

export function App({ apiRes }: { apiRes: ApiResponse }) {
  const [searchTerm, saveSearchTerm] = useSearchTerm();
  const theme = useContext(ThemeContext);
  const { query } = useRouter();
  const [page, setPage] = useState(Number(query.page) || 1);
  // const { data, isFetching } = planetsApi.useGetItemsQuery({ searchTerm, page });
  const details = query.details;

  // useEffect(() => {
  //   dispatch(updatePage(page));
  //   setSearchParams((prev) => {
  //     prev.set('page', page.toString());
  //     return prev;
  //   });
  // }, [page, setSearchParams, dispatch]);

  console.log(apiRes);

  const prev = apiRes?.previous || null;
  const next = apiRes?.next || null;

  // return <div>aaa</div>;

  return (
    <div className={`${styles.app} ${theme.theme === 'light' ? styles.light : ''}`}>
      <ErrorBoundary>
        <ThemeSwitch />
        <Search setPage={setPage} initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} />
        <ErrorThrower />

        <p className={styles.text}>Page: {page}</p>
        {apiRes?.results?.length && <Pagination prev={prev} next={next} setPage={setPage} />}

        <div className={styles.wrapper}>
          <Results items={apiRes.results} />
          {details && <Details />}
        </div>
        {/* <SelectedItemsFlyout /> */}
      </ErrorBoundary>
    </div>
  );
}
