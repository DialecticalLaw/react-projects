// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Planet {
  name: string;
  population: string;
  terrain: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  gravity: string;
  diameter: string;
  climate: string;
  url: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

// export const planetsApi = createApi({
//   reducerPath: 'planetsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets/' }),
//   endpoints: (builder) => ({
//     getItems: builder.query<ApiResponse, { searchTerm: string; page: number }>({
//       query: ({ searchTerm, page }) => `?search=${searchTerm}&page=${page}`
//     }),
//     getItemById: builder.query<Planet, string | null>({
//       query: (id) => {
//         if (!id) throw new Error('invalid id');
//         return id;
//       }
//     })
//   })
// });
