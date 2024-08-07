// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
