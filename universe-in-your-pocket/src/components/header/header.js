import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = ({ isAuthorized, logOut }) => {
  const logoRef = useRef(null); // Create a link to the logo

  useEffect(() => {
    // When mounting the component, set the focus on the logo
    logoRef.current.focus();
  }, []);
  return (
    <header className="header">
      <div className="navBrand">
        <Link to="/" className="navBrand__link">
          <img
            src={require("../../img/logo.png")}
            alt="logo"
            className="header__logo"
            ref={logoRef} // Attaching a link to the logo
          />
          <span className="companyName">COSMOPOCKET</span>
        </Link>
      </div>
      <nav aria-label="Main Navigation">
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
          {isAuthorized && (
            <li>
              <Link to="/blog" className="navMenu__link">
                Blog
              </Link>
            </li>
          )}
          {isAuthorized ? (
            <li onClick={logOut}>
              <Link to="/" className="navMenu__link">
                Log out
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/registration" className="navMenu__link">
                Registration
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
