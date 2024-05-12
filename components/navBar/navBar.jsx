import Menu from "./menu";
import Search from "./search";
import "../../src/styles/navBar.css";
import { Link } from "react-router-dom";
import TiendaIcon from "../../src/assets/icons/TiendaIcon";

const NavBar = () => {
  return (
    <nav className="general-navbar">
      <div className="search-section">
        <Link to={"/"} className="branch-container">
          <div className="branch-name">
          Trinidad.Aldi 
          </div>
          <div className="branch-icon">
          <TiendaIcon />
          </div>
        </Link>
        <div>
          <Search />
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
