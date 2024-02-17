import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { StyledAppContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <StyledAppContainer className="container">
          <Outlet />
        </StyledAppContainer>
      </main>
    </>
  );
};

export default SharedLayout;
