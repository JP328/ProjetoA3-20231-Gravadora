import { createSlice } from '@reduxjs/toolkit';

const references = createSlice({
  name: 'references',
  initialState: {
    references: {
      ourTime: "",
      aboutUs: "",
      contact: ""
    }
  },
  reducers: {
    setRefences(state, action) {
      const ref = action.payload.name
      state.references = {...references, [ref]: action.payload.value}
    }
  }
})

export const { setReferences } = references.actions;
export const referencesReducer = references.reducer;
