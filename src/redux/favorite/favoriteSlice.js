import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favoriteArr: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: INITIAL_STATE,

  reducers: {
    addFavoriteCar(state, action) {
      state.favoriteArr.push(action.payload);
    },
    removeFavoriteCar(state, action) {
      state.favoriteArr = state.favoriteArr.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
