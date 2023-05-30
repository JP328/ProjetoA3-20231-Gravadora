import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints(builder) {
    return {
      fectchUsers: builder.query({
        query: () => {
          return {
            method: 'GET',
            url: '/usuarios'
          }
        }        
      }),
      addUsers: builder.mutation({
        query: (data) => {
          return {
            method: 'POST',
            url: '/usuarios',
            body: {
              ...data
            }
          };
        }
      })
    }
  }
})

export const { useAddUsersMutation } = usersApi;
export { usersApi };