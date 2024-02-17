import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 16px 0;
  background-color: #3470ff;

  .header-list {
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  .header-link {
    color: black;
    display: inline-block;
    padding: 5px 15px;
    font-size: 18px;
    text-decoration: none;
    border-radius: 10px;

    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: #0b44cd;
    }

    &.active {
      background-color: #fff;
      color: #000;
      border-radius: 10px;
    }
  }
`;
