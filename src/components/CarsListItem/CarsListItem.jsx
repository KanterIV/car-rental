import {
  chunkAddressCity,
  chunkAddressCountry,
  firstLetterUpCase,
} from "../../services/stringSplit";
import Line from "../Line/Line";
import { StyledCarsListItem } from "./CarsListItem.styled";

const CarsListItem = ({
  carId,
  carImg,
  carMake,
  carModel,
  carYear,
  carRentalPrice,
  carAdress,
  carRentalCompany,
  carType,
}) => {
  const carCity = chunkAddressCity(carAdress);
  const carCountry = chunkAddressCountry(carAdress);
  const correctType = firstLetterUpCase(carType);

  return (
    <StyledCarsListItem>
      <div className="content-wrapper">
        <img src={carImg} className="cars-img" alt={`${carMake} ${carModel}`} />
        <div className="title-wrapper">
          <h3 className="cars-title">{`${carMake} ${carModel}, ${carYear}`}</h3>
          <p className="car-price">{carRentalPrice}</p>
        </div>
        <div className="description">
          {carCity}
          <Line />
          {carCountry}
          <Line />
          {carRentalCompany}
          <Line />
          {correctType}
          <Line />
          {carMake}
          <Line />
          {carId}
          <Line />
        </div>
      </div>

      <button className="car-btn" type="button">
        Learn more
      </button>
    </StyledCarsListItem>
  );
};

export default CarsListItem;
