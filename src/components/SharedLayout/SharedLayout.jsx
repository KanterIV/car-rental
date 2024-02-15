import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { StyledAppContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <StyledAppContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </StyledAppContainer>
  );
};

export default SharedLayout;
