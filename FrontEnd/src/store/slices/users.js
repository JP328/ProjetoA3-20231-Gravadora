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
            url: '/usuarios',
            method: 'GET'
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
      validationByPassword: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: '/usuarios/validation/',
            body: {
               ...data
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
      updateUser: builder.mutation({
        query: (data) => {
          return {
            method: 'PUT',
            url: `/usuarios/${data.idUsuario}`,
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
  useValidationByPasswordMutation,
  useAddUserMutation,
  useUpdateUserMutation, 
  useFectchUserByIdQuery, 
  useFectchUsersQuery, 
  useRemoveUserMutation } = usersApi;
export { usersApi };