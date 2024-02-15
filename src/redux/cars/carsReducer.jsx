import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { requestAllCars } from "../../services/api/api";

export const getAllRentalCars = createAsyncThunk(
  "cars/getAll",
  async (_, thunkApi) => {
    try {
      const carsArray = await requestAllCars();
      return carsArray;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  carsArray: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder

      // ------------ Login User ----------------------
      .addCase(getAllRentalCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })

      .addMatcher(isAnyOf(getAllRentalCars.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAllRentalCars.rejected), (state) => {
        state.isLoading = false;
        state.error = null;
      }),
});
export const carsReducer = carsSlice.reducer;
