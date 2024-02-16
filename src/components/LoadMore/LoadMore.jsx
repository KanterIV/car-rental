import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { StyledLoadMore } from "./LoadMore.styled";
import { getMoreRentalCars, setPage } from "../../redux/cars/carsReducer";
import { selectPage } from "../../redux/cars/carsSelectors";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    dispatch(getMoreRentalCars(page));
  }, [dispatch, page]);

  return (
    <StyledLoadMore
      onClick={() => {
        dispatch(setPage());
      }}
    >
      Load more
    </StyledLoadMore>
  );
};

export default LoadMoreBtn;
