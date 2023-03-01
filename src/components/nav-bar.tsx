export function NavBar(): JSX.Element {
  return (
    <nav className="nav-bar">
      <a href="" className="nav-bar__menu">
        <span className="nav-bar__name">HOME</span>
        <i className="fa-solid fa-chevron-down nav-bar__arrow-icon"></i>
      </a>
      <a href="" className="nav-bar__menu">
        <span className="nav-bar__name">FRESH FOOD</span>
      </a>
      <a href="" className="nav-bar__menu">
        <span className="nav-bar__name">BAKERY</span>
      </a>
      <a href="" className="nav-bar__menu">
        <span className="nav-bar__name">DRINKS</span>
      </a>
      <a href="" className="nav-bar__menu">
        <span className="nav-bar__name">SHOP</span>
        <i className="fa-solid fa-chevron-down nav-bar__arrow-icon"></i>
      </a>
      <a href="" className="nav-bar__menu nav-bar__menu--active">
        <span className="nav-bar__name">PAGES</span>
        <i className="fa-solid fa-chevron-down nav-bar__arrow-icon"></i>
      </a>
      <a href="" className="nav-bar__menu">
        <span className="nav-bar__name">BLOG</span>
        <i className="fa-solid fa-chevron-down nav-bar__arrow-icon"></i>
      </a>
      <a href="" className="nav-bar__menu">
        <span className="nav-bar__name">CONTACT</span>
      </a>
    </nav>
  );
}
