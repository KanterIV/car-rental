import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRentalCars } from "../../redux/cars/carsReducer";
import CarsList from "../../components/CarsList/CarsList";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRentalCars());
  }, [dispatch]);

  return <CarsList />;
};

export default Main;
