import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;

  .modal {
    position: relative;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
    background-color: #ffffff;
    color: black;
    border-radius: 24px;
    line-height: 1.1;

    @media (min-width: 1440px) {
      width: 541px;
      padding: 40px;
    }

    &::-webkit-scrollbar-track {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .close-btn-svg {
    width: 24px;
    height: 24px;
    path {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: #121417;
    }
  }

  .close-btn-svg:hover {
    path {
      stroke: #0b44cd;
    }
  }

  img {
    width: 100%;
    height: 248px;
    object-fit: cover;
    border-radius: 14px;
    margin-bottom: 14px;
  }

  .title {
    font-size: 18px;
    line-height: 1.33;
    margin-bottom: 8px;
  }

  .title-blue {
    color: #3470ff;
  }

  .car-info-wrapper {
    margin-bottom: 14px;
  }
  .car-info {
    display: inline;
    font-size: 12px;
    line-height: 1.5;
    color: #12141780;

    &:not(:last-child) {
      padding-right: 6px;
      border-right: 1px solid grey;
      border-color: #1214171a;
    }
    &:not(:first-child) {
      padding-left: 6px;
    }
  }

  .description {
    margin-bottom: 24px;
    color: #121417;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  .subtitle {
    margin-bottom: 8px;
    color: #121417;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }

  .acces-funtional {
    margin-bottom: 24px;
  }

  .renta-subtitle {
    margin-bottom: 15px;
  }

  .conditiond-wrapper {
    display: flex;
    gap: 8px;
  }
  .condition {
    display: block;
    padding: 7px 14px 7px 14px;

    color: #363535;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 35px;
    background: rgb(249, 249, 249);
  }

  .condition-font {
    font-family: "Montserrat", sans-serif;
  }

  .title-bold {
    font-weight: 600;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    width: 168px;
    height: 44px;
    border: none;
    border-radius: 12px;

    color: #fff;
    background-color: #3470ff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #0b44cd;
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
  }
`;
