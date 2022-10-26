import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  carts: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth, setCarts } = sliceState.actions;
export default reducer;
