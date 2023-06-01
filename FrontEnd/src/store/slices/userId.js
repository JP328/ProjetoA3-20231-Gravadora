import { createSlice } from '@reduxjs/toolkit';

const userLocalInfos = createSlice({
  name: 'userLocalInfos',
  initialState: {},
  reducers: {
    setUsersInfos(state, action) {
      state = action.payload
    }
  }
})

export const { setUsersInfos } = userLocalInfos.actions;
export const userLocalInfosReducer = userLocalInfos.reducer;
