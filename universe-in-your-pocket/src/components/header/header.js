import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="navBrand">
          <Link to="/">
            <img
              src={require('../../img/logo.png')}
              alt="logo"
              className="logo"
            />
            <span className="companyName">COSMOPOCKET</span>
          </Link>
        </div>
      </div>
      <div className="navMenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/News">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
