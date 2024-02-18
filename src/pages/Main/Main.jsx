import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRentalCars } from "../../redux/cars/carsSlice";
import {
  selectCars,
  selectFilterValue,
  selectVisibleCars,
} from "../../redux/cars/carsSelectors";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMore/LoadMore";
import Filter from "../../components/Filter/Filter";

const Main = () => {
  const dispatch = useDispatch();
  const filterBrand = useSelector(selectFilterValue);
  const cars = useSelector(selectCars);
  const filterCarsArray = useSelector(selectVisibleCars);

  useEffect(() => {
    dispatch(getRentalCars());
  }, [dispatch]);

  return (
    <>
      <Filter />
      {filterBrand === "All" ? (
        <CarsList carsArray={cars} />
      ) : (
        <CarsList carsArray={filterCarsArray} />
      )}

      <LoadMoreBtn />
    </>
  );
};

export default Main;
