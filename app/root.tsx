import { Links, Meta, Scripts, useLoaderData } from '@remix-run/react';
import globalCss from './global.css?url';
import { json, LoaderFunctionArgs, LinksFunction } from '@remix-run/node';
import { ApiResponse, Planet } from 'interfaces';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: globalCss }];

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
  const { apiRes } = useLoaderData<typeof loader>();
  console.log(apiRes);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="./planet.ico" />
        <title>Star Wars - Planets search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>

        <Scripts />
      </body>
    </html>
  );
}
