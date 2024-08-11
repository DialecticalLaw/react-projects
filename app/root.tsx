import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import globalCss from './global.css?url';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: globalCss }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="./public/planet.ico" />
        <title>Star Wars - Planets search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
