'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useSearchTerm } from '../../hooks/useSearchTerm';
import styles from './Home.module.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
// import { Search } from '../Search/Search';
// import { Pagination } from '../Pagination/Pagination';
// import { Results } from '../Results/Results';
// import { Loader } from '../Loader/Loader';
// import { Details } from '../Details/Details';
// import { SelectedItemsFlyout } from '../SelectedItemsFlyout/SelectedItemsFlyout';
import { ApiResponse, Planet } from '../../interfaces';

export default function Home({ apiRes }: { apiRes: ApiResponse; detailsRes?: Planet }) {
  const [searchTerm] = useSearchTerm();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { theme } = useContext(ThemeContext);
  const [page] = useState(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    if (page.toString() !== searchParams.get('page') || searchTerm !== searchParams.get('search')) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', page.toString());
      params.set('search', searchTerm);
      replace(`${pathname}?${params.toString()}`);
    }
  }, [page, pathname, replace, searchParams, searchTerm]);

  // const prev = apiRes?.previous || null;
  // const next = apiRes?.next || null;
  console.log(apiRes);

  return (
    <div className={`${styles.app} ${theme === 'light' ? styles.light : ''}`}>
      <ThemeSwitch />
      {/* <Search setPage={setPage} initialSearchTerm={searchTerm} saveSearchTerm={saveSearchTerm} /> */}

      <p className={styles.text}>Page: {page}</p>
      {/* {!loading && apiRes?.results?.length && <Pagination prev={prev} next={next} setPage={setPage} />} */}

      {/* <div className={styles.wrapper}>
        {loading ? <Loader /> : <Results items={apiRes?.results} />}
        {query.details && detailsRes && <Details data={detailsRes} isLoading={loading} />}
      </div> */}
      {/* <SelectedItemsFlyout /> */}
    </div>
  );
}
