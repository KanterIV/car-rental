import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.carsArray;
export const selectTotalCars = (state) => state.cars.carsTotal;
export const selectModalState = (state) => state.cars.isModalOpen;
export const selectCarDetails = (state) => state.cars.carDetails;
export const selectFilterValue = (state) => state.cars.filter.filterValue;
export const selectIsLoading = (state) => state.cars.isLoading;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilterValue],
  (car, filter) => {
    return car.filter((car) =>
      car.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
