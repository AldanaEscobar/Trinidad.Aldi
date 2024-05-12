import { Link } from "react-router-dom";
import Carrito from "./carrito";

const Menu = () => {
  return (
    <div className="navbar-menu">
      <ul className="navbar-menu-container ul">
        <li className="navbar-menu-item">
          <Link to="" className="a">Guias de viaje</Link>
        </li>
        <li className="navbar-menu-item li">
        <Link to="" className="a">Servicios</Link>
        </li>
        <li className="navbar-menu-item">
        <Link to="" className="a">Blog</Link>
        </li>
        <li className="navbar-menu-item">
           <Link className="a"> <Carrito />
           <div className="notification">1</div> </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
