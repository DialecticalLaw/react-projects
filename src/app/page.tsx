import { Suspense } from 'react';
import Home from '../components/Home/Home';
import { ApiResponse, Planet } from '../interfaces';

async function getData(searchParams?: { [key: string]: string }) {
  if (!searchParams) throw new Error('searchParams is undefined');
  const page = searchParams.page || '1';
  const details = searchParams.details;
  const search = searchParams.search || '';

  const result: { apiRes: ApiResponse; detailsRes?: Planet } = {
    apiRes: await (await fetch(`https://swapi.dev/api/planets/?page=${page}&search=${search}`)).json()
  };
  if (details) {
    result.detailsRes = await (await fetch(`https://swapi.dev/api/planets/${details}`)).json();
  }

  return result;
}

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string } }) {
  const data = await getData(searchParams);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home apiRes={data.apiRes} detailsRes={data.detailsRes} />
    </Suspense>
  );
}
