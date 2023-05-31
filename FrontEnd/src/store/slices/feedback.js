import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const feedbackApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6000'
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
            params: {
              id: id
            }
          }
        }        
      }),
      addFeedback: builder.mutation({
        query: (data, id) => {
          return {
            method: 'POST',
            url: `/feedback/${id}`,
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