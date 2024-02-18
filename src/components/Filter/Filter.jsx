import { useDispatch } from "react-redux";
import { carsMakesList } from "../../assets/data/makes";
import { setFilterValue } from "../../redux/cars/carsSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const onSelectChange = (event) => {
    const selectedBrand = event.target.value;
    dispatch(setFilterValue(selectedBrand));
  };

  return (
    <>
      <label htmlFor="make">Car brand</label>
      <select onChange={onSelectChange} id="make" name="make">
        {carsMakesList.map((brand) => {
          return (
            <option key={brand} value={brand}>
              {brand}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Filter;
