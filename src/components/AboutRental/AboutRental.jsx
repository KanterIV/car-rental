import React from "react";
import { AboytWrapper } from "./AboutRental.styled";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const AboutRental = () => {
  const navigate = useNavigate();
  const onViewCarsClick = () => {
    navigate("/catalog");
  };

  return (
    <AboytWrapper>
      <h1>Car Rental – Search, Compare, and Save up to 70%! </h1>
      <p>
        Looking for a vehicle? You’re at the right place. Click through our
        catalog and pick up a vehicle for yourself.
      </p>

      <Button onBtnClick={onViewCarsClick}>View cars</Button>
    </AboytWrapper>
  );
};

export default AboutRental;
