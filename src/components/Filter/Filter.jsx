import { useDispatch } from "react-redux";
import { carsMakesList } from "../../assets/data/makes";
import { setFilterValue } from "../../redux/cars/carsSlice";
import { StyledFilterWrapper } from "./Filter.styled";

const Filter = () => {
  const dispatch = useDispatch();

  const onSelectChange = (event) => {
    const selectedBrand = event.target.value;
    dispatch(setFilterValue(selectedBrand));
  };

  return (
    <StyledFilterWrapper>
      <label className="filter-lable" htmlFor="make">
        Car brand
      </label>
      <select
        className="filter-select"
        onChange={onSelectChange}
        id="make"
        name="make"
      >
        {carsMakesList.map((brand) => {
          return (
            <option key={brand} value={brand}>
              {brand}
            </option>
          );
        })}
      </select>
    </StyledFilterWrapper>
  );
};

export default Filter;
