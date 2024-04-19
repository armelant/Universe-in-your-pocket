const Header = () => {
  return (
    <header className="header">
      <div className="navBrand">
        <a href="/" class="navBrand__link">
          <img
            src={require("../../img/logo.png")}
            alt="logo"
            className="header__logo"
          />
          <span className="companyName">COSMOPOCKET</span>
        </a>
      </div>
      <ul className="navMenu menu">
        <li>
          <a href="/" className="navMenu__link">
            Home
          </a>
        </li>
        <li>
          <a href="/News" className="navMenu__link">
            News
          </a>
        </li>
        <li>
          <a href="/Blog" className="navMenu__link">
            Blog
          </a>
        </li>
        <li>
          <a href="/contact" className="navMenu__link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
