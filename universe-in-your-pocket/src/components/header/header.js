import './header.css';

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="navBrand">
          <a href="/">
            <img
              src={require('../../img/logo.png')}
              alt="logo"
              className="logo"
            />
            <span className="companyName">COSMOPOCKET</span>
          </a>
        </div>
      </div>
      <div className="navMenu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/News">News</a>
          </li>
          <li>
            <a href="/News">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
