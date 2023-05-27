import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from "./slices/users";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath] : usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware);
  }
})

setupListeners(store.dispatch);

export { useAddUsersMutation } from './slices/users'





















// import axios from "axios";

// const requisition = async (value, type) => {
//   switch  (type) {
//     case "postUser":
//       await axios.post("http://localhost:5000/usuarios", value, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })     
//       break;
//     case "getUsers":
//       axios.get("http://localhost:5000/usuarios")      
//       break;
//     default:
//       break;
//   }
// }

// export default requisition;