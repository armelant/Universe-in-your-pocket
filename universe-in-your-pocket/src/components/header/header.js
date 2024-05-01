import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="navBrand">
        <Link to="/" class="navBrand__link">
          <img
            src={require("../../img/logo.png")}
            alt="logo"
            className="header__logo"
          />
          <span className="companyName">COSMOPOCKET</span>
        </Link>
      </div>
      <ul className="navMenu menu">
        <li>
          <Link to="/" className="navMenu__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/News" className="navMenu__link">
            News
          </Link>
        </li>
        <li>
          <Link to="/Blog" className="navMenu__link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/registration" className="navMenu__link">
            Registration
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
