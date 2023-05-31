import { createSlice } from '@reduxjs/toolkit';

const userId = createSlice({
  name: 'userId',
  initialState: {
    id: ""
  },
  reducers: {
    setId(state, action) {
      state.id = action.payload
    }
  }
})

export const { setId } = userId.actions;
export const userIdReducer = userId.reducer;
