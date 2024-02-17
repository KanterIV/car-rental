import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  requestAllCars,
  requestCarById,
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

export const getCarById = createAsyncThunk(
  "cars/getCarInfo",
  async (id, thunkApi) => {
    try {
      const car = await requestCarById(id);
      return car;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  carsArray: [],
  carsTotal: null,
  carDetails: null,
  isModalOpen: false,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,

  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },

    closeModal(state) {
      state.isModalOpen = false;
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

      .addCase(getCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carDetails = action.payload;
      })

      .addMatcher(
        isAnyOf(
          getTotalCars.pending,
          getRentalCars.pending,
          getMoreRentalCars.pending,
          getCarById.pending
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
          getMoreRentalCars.rejected,
          getCarById.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const { openModal, closeModal } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
