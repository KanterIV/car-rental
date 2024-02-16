import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { StyledLoadMore } from "./LoadMore.styled";
import { getMoreRentalCars } from "../../redux/cars/carsSlice";
import { selectTotalCars } from "../../redux/cars/carsSelectors";

const LoadMoreBtn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalCars = useSelector(selectTotalCars);
  const pageLimit = Math.ceil(totalCars / 12);
  const dispatch = useDispatch();

  const changePageHelper = () => {
    setCurrentPage((prevState) => (prevState += 1));
  };

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }
    dispatch(getMoreRentalCars(currentPage));
  }, [dispatch, currentPage]);

  return (
    <StyledLoadMore
      className={currentPage >= pageLimit && "hidden"}
      onClick={() => {
        changePageHelper();
      }}
    >
      Load more
    </StyledLoadMore>
  );
};

export default LoadMoreBtn;
