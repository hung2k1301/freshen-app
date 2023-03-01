export function TopBar(): JSX.Element {
  return (
    <div className="top-bar">
      <div className="top-bar__contact">
        <div className="top-bar__info">
          <img
            src="/images/phone.svg"
            alt="Phone"
            className="top-bar__info-icon"
          />
          <a href="tel:(+035)527-1710-70">(+035) 527-1710-70</a>
        </div>
        <div className="top-bar__info">
          <img
            src="/images/email.svg"
            alt="mail"
            className="top-bar__info-icon"
          />
          <a href="mailto:order@freshen.com">order@freshen.com</a>
        </div>
      </div>

      <p className="top-bar__free-shipping">
        Free shipping for orders over $59. $5.00 USPS Shipping on $25+ !
      </p>

      <div className="top-bar__dropdown-group">
        <div className="top-bar__dropdown">
          <p className="top-bar__dropdown-name">Language</p>
          <button className="top-bar__dropdown-list">
            English
            <i className="fa-solid fa-chevron-down top-bar__dropdown-arrow"></i>
          </button>
        </div>

        <div className="top-bar__dropdown">
          <p className="top-bar__dropdown-name">Currency</p>
          <button className="top-bar__dropdown-list">
            USD($)
            <i className="fa-solid fa-chevron-down top-bar__dropdown-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
