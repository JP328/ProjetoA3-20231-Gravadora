import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from "./slices/users";
import { feedbackApi } from "./slices/feedback";
import { userIdReducer } from "./slices/userId";
import { referencesReducer } from "./slices/references";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath] : usersApi.reducer,
    [feedbackApi.reducerPath] : feedbackApi.reducer,
    [userIdReducer.name] : userIdReducer,
    [referencesReducer.name] : referencesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware);
  }
})

setupListeners(store.dispatch);

export { 
  useAddUserMutation, 
  useFectchUserByIdQuery, 
  useFectchUsersQuery, 
  useRemoveUserMutation } from './slices/users'

  export { 
  useAddFeedbackMutation, 
  useFectchFeedbackByIdQuery, 
  useFectchFeedbacksQuery, 
  useRemoveFeedbackMutation } from './slices/feedback'

export { setId } from './slices/userId'
export { setReferences } from './slices/references'