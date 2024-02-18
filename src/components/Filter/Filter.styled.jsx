import styled from "styled-components";

export const StyledFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  .filter-lable {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: #8a8a89;
  }

  .filter-select {
    width: 224px;
    height: 48px;
    padding: 14px 89px 14px 18px;
    border: none;
    border-radius: 14px;
    background-color: #f7f7fb;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;

    &:hover,
    &:focus {
      outline: transparent;
    }
  }
`;
