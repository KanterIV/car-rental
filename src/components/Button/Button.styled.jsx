import styled from "styled-components";

export const StyledButton = styled.button`
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
`;
