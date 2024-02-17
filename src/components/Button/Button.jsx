import { StyledButton } from "./Button.styled";

const Button = ({ onBtnClick, children }) => {
  return (
    <StyledButton
      onClick={() => {
        onBtnClick();
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
