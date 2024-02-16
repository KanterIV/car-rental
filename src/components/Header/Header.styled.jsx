import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 40px;
  margin-bottom: 20px;

  .header-list {
    display: flex;
    justify-content: center;
  }

  .header-link {
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 15px;
    font-size: 18px;
    text-decoration: none;
    margin-right: 20px;
    border-radius: 10px;

    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: #3470ff;
      color: white;
      border-radius: 10px;
    }
  }
`;
