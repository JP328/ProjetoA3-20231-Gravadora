import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from "./slices/users";
import { feedbackApi } from "./slices/feedback";
import { userLocalInfosReducer } from "./slices/userId";
import { referencesReducer } from "./slices/references";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath] : usersApi.reducer,
    [feedbackApi.reducerPath] : feedbackApi.reducer,
    [userLocalInfosReducer.name] : userLocalInfosReducer,
    [referencesReducer.name] : referencesReducer,
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
  useFectchUserByIdQuery, 
  useFectchUsersQuery, 
  useRemoveUserMutation } from './slices/users'

export { 
useAddFeedbackMutation, 
useFectchFeedbackByIdQuery, 
useFectchFeedbacksQuery, 
useRemoveFeedbackMutation } from './slices/feedback'

export { setUsersInfos } from './slices/userId'
export { setReferences } from './slices/references'