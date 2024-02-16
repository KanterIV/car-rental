import { StyledContainer } from "./EmptyFavorites.styled";
import favoriteImg from "../../assets/images/favorite.png";

const EmptyFavorites = () => {
  return (
    <StyledContainer>
      <h2 className="favorite-title">Save your favorite cars</h2>
      <p className="favorite-description">
        If you found something interesting in our car catalog, click on the
        heart in the search results.
      </p>
      <img className="favorite-img" src={favoriteImg} alt="favorite-page-img" />
    </StyledContainer>
  );
};

export default EmptyFavorites;
