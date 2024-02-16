import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/carsSelectors";
import CarsListItem from "../CarsListItem/CarsListItem";
import { StyledCarsList } from "./CarsList.styled";

const CarsList = () => {
  const carsArray = useSelector(selectCars);

  return (
    <StyledCarsList>
      {carsArray.length !== 0 &&
        carsArray.map((car) => {
          const {
            id,
            img,
            make,
            model,
            year,
            rentalPrice,
            address,
            rentalCompany,
            type,
          } = car;

          return (
            <CarsListItem
              key={id}
              carId={id}
              carImg={img}
              carMake={make}
              carModel={model}
              carYear={year}
              carRentalPrice={rentalPrice}
              carAdress={address}
              carRentalCompany={rentalCompany}
              carType={type}
            />
          );
        })}
    </StyledCarsList>
  );
};

export default CarsList;
