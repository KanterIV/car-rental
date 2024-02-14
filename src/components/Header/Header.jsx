import { StyledHeader } from "./Header.styled";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <nav className="header-nav">
        <ul className="header-list">
          <li>
            <NavLink className="header-link" to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/catalog">
              Our cars
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/favorites">
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
