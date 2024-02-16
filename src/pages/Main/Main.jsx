import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRentalCars } from "../../redux/cars/carsSlice";
import { selectCars } from "../../redux/cars/carsSelectors";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMore/LoadMore";

const Main = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getRentalCars());
  }, [dispatch]);

  return (
    <>
      <CarsList carsArray={cars} />
      <LoadMoreBtn />
    </>
  );
};

export default Main;
