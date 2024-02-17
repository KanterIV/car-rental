import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledAppContainer } from "./SharedLayout.styled";
import Modal from "../Modal/Modal";
import { selectModalState } from "../../redux/cars/carsSelectors";

const SharedLayout = () => {
  const isModalOpen = useSelector(selectModalState);

  return (
    <>
      <Header />
      <main>
        <StyledAppContainer className="container">
          <Outlet />
        </StyledAppContainer>
        {isModalOpen && <Modal />}
      </main>
    </>
  );
};

export default SharedLayout;
