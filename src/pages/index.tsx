import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ApiResponse } from '../interfaces';

export const getServerSideProps: GetServerSideProps<{ apiRes: ApiResponse }> = async (context) => {
  console.log(context);
  const res = await fetch('https://swapi.dev/api/planets/');
  const apiRes: ApiResponse = await res.json();
  return { props: { apiRes } };
};

export default function Page() {
  return (
    <Head>
      <title>Star Wars - Planets search</title>
    </Head>
  );
}