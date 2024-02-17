import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledModalBackdrop } from "./Modal.styled";
import Button from "../Button/Button";
import { closeModal } from "../../redux/cars/carsSlice";
import { selectCarDetails } from "../../redux/cars/carsSelectors";
import {
  chunkAddressCity,
  chunkAddressCountry,
  chunkConditions,
  chunkMaxAge,
  firstLetterUpCase,
} from "../../services/stringSplit";
import { ReactComponent as IconClose } from "../../assets/icons/close.svg";

const Modal = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectCarDetails);
  const {
    id,
    make,
    model,
    year,
    address,
    accessories,
    functionalities,
    rentalPrice,
    img,
    type,
    mileage,
    engineSize,
    fuelConsumption,
    description,
    rentalConditions,
  } = car;

  const carCity = chunkAddressCity(address);
  const carCountry = chunkAddressCountry(address);
  const correctType = firstLetterUpCase(type);
  const { maxAge, validDrive, security } = chunkConditions(rentalConditions);
  const { title, age } = chunkMaxAge(maxAge);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        dispatch(closeModal());
      }
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
      document.body.style.overflowY = "visible";
    };
  }, [dispatch]);

  return (
    <StyledModalBackdrop onClick={handleOverlayClick}>
      <div className="modal">
        <button
          className="close-btn"
          type="button"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <IconClose className="close-btn-svg" />
        </button>

        <img src={img} alt={`${make}_${model}`} />
        <h3 className="title">
          {`${make} `}
          <span className="title-blue">{model}</span>
          {` ${year}`}
        </h3>
        <div className="car-info-wrapper">
          <span className="car-info">{carCity}</span>
          <span className="car-info">{carCountry}</span>
          <span className="car-info">Id: {id} </span>
          <span className="car-info">Year: {year}</span>
          <span className="car-info">Type: {correctType}</span>
          <span className="car-info">Fuel Consumption: {fuelConsumption}</span>
          <span className="car-info">Engine Size: {engineSize}</span>
        </div>

        <p className="description">{description}</p>
        <h4 className="subtitle">Accessories and functionalities:</h4>
        <div className="acces-funtional">
          {accessories.map((item, index) => {
            const newKey = `${index}_${id}_${year}`;
            return (
              <span key={newKey} className="car-info">
                {item}
              </span>
            );
          })}
          {functionalities.map((item, index) => {
            const newKey = `${index}_${id}`;
            return (
              <span key={newKey} className="car-info">
                {item}
              </span>
            );
          })}
        </div>

        <h4 className="subtitle">Rental Conditions: </h4>

        <div>
          <span>
            {`${title}: `}
            <span>{age}</span>
          </span>
          <span>{validDrive}</span>
        </div>

        <div>
          <span>{security}</span>
          <span>
            Mileage:
            <span>{new Intl.NumberFormat("en-US").format(mileage)}</span>
          </span>
          <span>
            Price: <span>{rentalPrice}$</span>
          </span>
        </div>

        <Button
          onBtnClick={() => {
            return;
          }}
        >
          Rental car
        </Button>
      </div>
    </StyledModalBackdrop>
  );
};

export default Modal;
