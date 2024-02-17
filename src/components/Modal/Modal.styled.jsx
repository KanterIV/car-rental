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
`;
