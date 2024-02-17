import styled from "styled-components";

export const AboytWrapper = styled.div`
  width: 100%;
  padding-top: 100px;

  h1 {
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 33%,
      rgba(0, 0, 0, 1) 42%
    );

    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 46%,
      rgba(0, 0, 0, 1) 46%
    );

    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    margin: 15px auto;
  }
`;
