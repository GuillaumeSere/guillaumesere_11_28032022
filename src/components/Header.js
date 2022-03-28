import LogoRed from "../assets/logo_red.png";
import NavLink from "./NavLink";
import "../styles/header.css";


function Header() {
    return (
      <div id="header_container">
        <div>
          <img src={LogoRed} alt="logo kasa" className="logo_header" />
        </div>
        <nav id="nav_container">
          <NavLink to="/" label="Acceuil" />
          <NavLink to="about" label="A Propos" />
        </nav>
      </div>
    );
  }
  
  export default Header;