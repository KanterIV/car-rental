import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRentalCars } from "../../redux/cars/carsReducer";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMore/LoadMore";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRentalCars());
  }, [dispatch]);

  return (
    <>
      <CarsList />
      <LoadMoreBtn />
    </>
  );
};

export default Main;
