import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Planet } from './API_service';

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets/' }),
  endpoints: (builder) => ({
    getItems: builder.query<Planet, { searchTerm: string; page: number }>({
      query: ({ searchTerm, page }) => `?search=${searchTerm}&page=${page}`
    }),
    getItemById: builder.query<Planet, string>({
      query: (id) => id
    })
  })
});

export const { useGetItemsQuery, useLazyGetItemByIdQuery } = planetsApi;
