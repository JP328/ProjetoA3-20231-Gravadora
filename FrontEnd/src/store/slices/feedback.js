import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const feedbackApi = createApi({
  reducerPath: 'feedback',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7000'
  }),
  endpoints(builder) {
    return {
      fectchFeedbacks: builder.query({
        query: () => {
          return {
            method: 'GET',
            url: '/feedback'
          }
        }        
      }),
      fectchFeedbackById: builder.query({
        query: (id) => {
          return {
            method: 'GET',
            url: `/feedback/${id}`,
          }
        }        
      }),
      addFeedback: builder.mutation({
        query: (data) => {
          return {
            method: 'POST',
            url: `/feedback/${data.idUsuario}`,
            body: {
              ...data
            }
          };
        }
      }),
      removeFeedback: builder.mutation({
       query: (id) => {
        return {
          method: 'DELETE',
          url: `/feedback/${id}`,
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
  useFectchFeedbacksQuery, 
  useFectchFeedbackByIdQuery, 
  useAddFeedbackMutation, 
  useRemoveFeedbackMutation } = feedbackApi;
export { feedbackApi };