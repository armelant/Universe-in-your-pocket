import { Link } from "react-router-dom";

const Header = ({ isAuthorized, isAdmin, logOut }) => {

  const handleAdminLogout = () => {
    localStorage.setItem("isAdmin", "false");
  };

  return (
    <header className="header">
      <div className="navBrand">
        <Link to="/" className="navBrand__link">
          <img
            src={require("../../img/logo.png")}
            alt="logo"
            className="header__logo"
          />
          <span className="companyName">COSMOPOCKET</span>
        </Link>
      </div>
      <ul className="navMenu menu">
            {localStorage.getItem("isAdmin") === "true" && (
              <li>
                <Link to="/adminPage" className="navMenu__link">
                  Admin Panel
                </Link>
              </li>
            )}
        <li>
          <Link to="/POTD" className="navMenu__link">
            POTD
          </Link>
        </li>
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
        {isAuthorized && (
          <>
            <li>
              <Link to="/blog" className="navMenu__link">
                Blog
              </Link>
            </li>
            <li onClick={logOut}>
              <Link to="/" className="navMenu__link">
                Log out
              </Link>
            </li>
          </>
        )}
        {!isAuthorized && (
          <li>
            <Link to="/registration" className="navMenu__link">
              Registration
            </Link>
          </li>
        )}
        {localStorage.getItem("isAdmin") === "true" && (
              <li>
                <Link to="/" 
                className="navMenu__link"
                onClick={handleAdminLogout}>
                  Admin logout
                </Link>
              </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
