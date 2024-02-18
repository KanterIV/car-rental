import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledAppContainer } from "./SharedLayout.styled";
import Modal from "../Modal/Modal";
import {
  selectIsLoading,
  selectModalState,
} from "../../redux/cars/carsSelectors";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  const isModalOpen = useSelector(selectModalState);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      <main>
        <StyledAppContainer className="container">
          <Outlet />
        </StyledAppContainer>
        {isModalOpen && <Modal />}
        {isLoading && <Loader />}
      </main>
    </>
  );
};

export default SharedLayout;
