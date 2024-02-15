import styled from "styled-components";

export const StyledAppContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 744px;
  }

  @media screen and (min-width: 1214px) {
    width: 1214px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
