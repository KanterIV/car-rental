import styled from "styled-components";

export const StyledCarsListItem = styled.li`
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cars-img {
    margin-bottom: 14px;
    border-radius: 14px;
    width: 274px;
    height: 268px;
    object-fit: cover;
  }

  .title-wrapper {
    display: flex;
    margin-bottom: 8px;
  }

  .cars-title {
    font-size: 16px;
    line-height: 1.5;
    margin-right: auto;
  }

  .car-price {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  .description {
    display: block;
    color: #12141780;
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: auto;
  }

  .car-btn {
    width: 274px;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;
    color: #fff;
    background-color: #3470ff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #0b44cd;
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }

    &:active {
      box-shadow: none;
    }
  }
`;
