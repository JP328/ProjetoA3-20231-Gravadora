import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from "./slices/users";
import { feedbackApi } from "./slices/feedback";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath] : usersApi.reducer,
    [feedbackApi.reducerPath] : feedbackApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(feedbackApi.middleware);
  }
})

setupListeners(store.dispatch);

export { 
  useValidationByPasswordMutation,
  useAddUserMutation, 
  useUpdateUserMutation,
  useFectchUserByIdQuery, 
  useFectchUsersQuery, 
  useRemoveUserMutation } from './slices/users'

export { 
useAddFeedbackMutation, 
useFectchFeedbackByIdQuery, 
useFectchFeedbacksQuery, 
useRemoveFeedbackMutation } from './slices/feedback'
