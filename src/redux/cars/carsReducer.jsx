import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  requestAllCars,
  requestCars,
  requestMoreCars,
} from "../../services/api/api";

export const getTotalCars = createAsyncThunk(
  "cars/getTotal",
  async (_, thunkApi) => {
    try {
      const carsArray = await requestAllCars();
      const total = carsArray.length;
      return total;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getRentalCars = createAsyncThunk(
  "cars/getCars",
  async (_, thunkApi) => {
    try {
      const carsArray = await requestCars();
      return carsArray;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMoreRentalCars = createAsyncThunk(
  "cars/getMoreCars",
  async (page, thunkApi) => {
    try {
      const carsArray = await requestMoreCars(page);
      return carsArray;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  carsArray: [],
  carsTotal: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,

  reducers: {
    setPage(state) {
      state.pagination.page = state.pagination.page += 1;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getTotalCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsTotal = action.payload;
      })

      .addCase(getRentalCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsArray = action.payload;
      })

      .addCase(getMoreRentalCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsArray = [...state.carsArray, ...action.payload];
      })

      .addMatcher(
        isAnyOf(
          getTotalCars.pending,
          getRentalCars.pending,
          getMoreRentalCars.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getTotalCars.rejected,
          getRentalCars.rejected,
          getMoreRentalCars.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const { setPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
