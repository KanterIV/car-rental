import CarsListItem from "../CarsListItem/CarsListItem";
import { StyledCarsList } from "./CarsList.styled";

const CarsList = ({ carsArray }) => {
  return (
    <StyledCarsList>
      {carsArray.length !== 0 &&
        carsArray.map((car) => {
          const {
            id,
            make,
            model,
            year,
            rentalPrice,
            address,
            rentalCompany,
            type,
          } = car;

          const img = car.img || car.photoLink;

          return (
            <CarsListItem
              key={id}
              id={id}
              img={img}
              make={make}
              model={model}
              year={year}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
              type={type}
            />
          );
        })}
    </StyledCarsList>
  );
};

export default CarsList;
