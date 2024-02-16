import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import { selectFavoriteCars } from "../../redux/favorite/favoriteSelectors";
import EmptyFavorites from "../../components/EmptyFavorites/EmptyFavorites";

const Favorite = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  const favoriteTotal = favoriteCars.length;

  return !favoriteTotal ? (
    <EmptyFavorites />
  ) : (
    <CarsList carsArray={favoriteCars} />
  );
};

export default Favorite;
