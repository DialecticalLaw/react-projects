import { App } from '../App';
import { Details } from '../components/Details/Details';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';

export const routerConfig = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Details />,
        path: '/'
      }
    ]
  }
];
