import { json, Meta, Scripts, useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/node';
import { ApiResponse, Planet } from 'interfaces';
import { Home } from '../components/Home/Home';
import './global.css';
import { Providers } from '../components/Home/Providers';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get('page') || '1';
  const details = searchParams.get('details');
  const search = searchParams.get('search') || '';

  const result: { apiRes: ApiResponse; detailsRes?: Planet } = {
    apiRes: await (await fetch(`https://swapi.dev/api/planets/?page=${page}&search=${search}`)).json()
  };
  if (details) {
    result.detailsRes = await (await fetch(`https://swapi.dev/api/planets/${details}`)).json();
  }

  return json(result);
};

export default function App() {
  const { apiRes, detailsRes } = useLoaderData<typeof loader>();
  console.log(apiRes, detailsRes);

  return (
    <html>
      <head>
        <link rel="icon" type="image/svg+xml" href="./planet.ico" />
        <title>Star Wars - Planets search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
      </head>
      <body>
        <Providers>
          <Home apiRes={apiRes} detailsRes={detailsRes} />
        </Providers>

        <Scripts />
      </body>
    </html>
  );
}
