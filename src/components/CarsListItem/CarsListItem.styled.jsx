import styled from "styled-components";

export const StyledCarsListItem = styled.li`
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content-wrapper {
    position: relative;
  }

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

  .icon-heart-btn {
    position: absolute;
    top: 14px;
    right: 14px;

    border: none;
    background-color: transparent;

    & svg {
      path {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        stroke: rgba(255, 255, 255, 0.8);
      }
      width: 18px;
      height: 18px;
    }

    &.isFavorite {
      & svg {
        path {
          stroke: #3470ff;
          fill: #3470ff;
        }
      }
    }
  }
`;
