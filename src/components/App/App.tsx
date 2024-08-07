// import { useSearchParams } from 'next/navigation';
import { useSearchTerm } from '../../hooks/useSearchTerm';
// import styles from './App.module.css';
// import { useEffect, useState } from 'react';
// import { ApiResponse } from '../../services/planets';
// import { useAppDispatch } from '../../store/hooks';
// import { updateItems, updatePage } from '../../store/slices/page_slice';
// import { ThemeContext } from '../../store/ThemeContext';
// import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
// import { Search } from '../Search/Search';
// import { ErrorThrower } from '../ErrorThrower/ErrorThrower';
// import { Pagination } from '../Pagination/Pagination';
// import { Results } from '../Results/Results';
// import { Details } from '../Details/Details';
// import { Loader } from '../Loader/Loader';
// import { SelectedItemsFlyout } from '../SelectedItemsFlyout/SelectedItemsFlyout';
// import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
// import { useRouter } from 'next/router';

export function App() {
  const [searchTerm] = useSearchTerm();
  // const router = useRouter();
  // const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  // const { data, isFetching } = planetsApi.useGetItemsQuery({ searchTerm, page });
  // const dispatch = useAppDispatch();
  // const details = searchParams.get('details');

  // useEffect(() => {
  //   dispatch(updatePage(page));
  //   setSearchParams((prev) => {
  //     prev.set('page', page.toString());
  //     return prev;
  //   });
  // }, [page, setSearchParams, dispatch]);

  // useEffect(() => {
  //   dispatch(updateItems(data?.results || []));
  // }, [data, dispatch]);

  console.log(searchTerm);
  // const prev = data?.previous || null;
  // const next = data?.next || null;
  return <div>aaa</div>;
  // return (
  //   <div className={`${styles.app} ${theme === 'light' ? styles.light : ''}`}>
  //       <ErrorBoundary>
  //         <ThemeSwitch />
  //         <Search
  //           setPage={setPage}
  //           isFetching={isFetching}
  //           initialSearchTerm={searchTerm}
  //           saveSearchTerm={saveSearchTerm}
  //         />
  //         <ErrorThrower />

  //         <p className={styles.text}>Page: {page}</p>
  //         {data && !isFetching && <Pagination prev={prev} next={next} setPage={setPage} />}

  //         <div className={styles.wrapper}>
  //           {isFetching ? <Loader /> : <Results items={data?.results} />}
  //           {details && <Details />}
  //         </div>
  //         <SelectedItemsFlyout />
  //       </ErrorBoundary>
  //   </div>
  // );
}
