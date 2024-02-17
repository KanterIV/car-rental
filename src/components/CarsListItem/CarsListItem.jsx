import {
  chunkAddressCity,
  chunkAddressCountry,
  firstLetterUpCase,
} from "../../services/stringSplit";
import Line from "../Line/Line";
import { StyledCarsListItem } from "./CarsListItem.styled";
import { ReactComponent as IconHeart } from "../../assets/images/heart.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/favorite/favoriteSelectors";
import {
  addFavoriteCar,
  removeFavoriteCar,
} from "../../redux/favorite/favoriteSlice";
import Button from "../Button/Button";

const CarsListItem = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
}) => {
  const carData = {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favoriteCarsArr = useSelector(selectFavoriteCars);
  const carCity = chunkAddressCity(address);
  const carCountry = chunkAddressCountry(address);
  const correctType = firstLetterUpCase(type);

  useEffect(() => {
    if (favoriteCarsArr.find((car) => car.id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteCarsArr, id]);

  const toggleFavoriteCar = () => {
    if (favoriteCarsArr.find((car) => car.id === id)) {
      dispatch(removeFavoriteCar(carData.id));
    } else {
      dispatch(addFavoriteCar(carData));
    }
  };

  return (
    <StyledCarsListItem>
      <div className="content-wrapper">
        <img src={img} className="cars-img" alt={`${make} ${model}`} />
        <div className="title-wrapper">
          <h3 className="cars-title">{`${make} ${model}, ${year}`}</h3>
          <p className="car-price">{rentalPrice}</p>
        </div>
        <div className="description">
          {carCity}
          <Line />
          {carCountry}
          <Line />
          {rentalCompany}
          <Line />
          {correctType}
          <Line />
          {make}
          <Line />
          {id}
          <Line />
        </div>
        <button
          className={
            isFavorite ? "icon-heart-btn isFavorite" : "icon-heart-btn"
          }
          type="button"
          onClick={() => toggleFavoriteCar(id)}
        >
          <IconHeart />
        </button>
      </div>

      <Button>Learn more</Button>
    </StyledCarsListItem>
  );
};

export default CarsListItem;
