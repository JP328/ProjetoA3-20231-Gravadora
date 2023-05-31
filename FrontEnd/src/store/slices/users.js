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
      fectchUserById: builder.query({
        query: (id) => {
          return {
            method: 'GET',
            url: `/usuarios/${id}`,
            params: {
              id: id
            }
          }
        }        
      }),
      addUser: builder.mutation({
        query: (data) => {
          return {
            method: 'POST',
            url: '/usuarios',
            body: {
              ...data
            }
          };
        }
      }),
      removeUser: builder.mutation({
       query: (id) => {
        return {
          method: 'DELETE',
          url: `/usuarios/${id}`,
          params: {
            id: id
          }
        }
       } 
      })
    }
  }
})

export const { 
  useAddUserMutation, 
  useFectchUserByIdQuery, 
  useFectchUsersQuery, 
  useRemoveUserMutation } = usersApi;
export { usersApi };