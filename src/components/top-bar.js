export function TopBar() {
  return (
    <div class="top-bar">
      <div class="top-bar__contact">
        <div class="top-bar__info">
          <img src="/images/phone.svg" alt="Phone" class="top-bar__info-icon" />
          <a href="tel:(+035)527-1710-70">(+035) 527-1710-70</a>
        </div>
        <div class="top-bar__info">
          <img src="/images/email.svg" alt="mail" class="top-bar__info-icon" />
          <a href="mailto:order@freshen.com">order@freshen.com</a>
        </div>
      </div>

      <p class="top-bar__free-shipping">
        Free shipping for orders over $59. $5.00 USPS Shipping on $25+ !
      </p>

      <div class="top-bar__dropdown-group">
        <div class="top-bar__dropdown">
          <p class="top-bar__dropdown-name">Language</p>
          <button class="top-bar__dropdown-list">
            English
            <i class="fa-solid fa-chevron-down top-bar__dropdown-arrow"></i>
          </button>
        </div>

        <div class="top-bar__dropdown">
          <p class="top-bar__dropdown-name">Currency</p>
          <button class="top-bar__dropdown-list">
            USD($)
            <i class="fa-solid fa-chevron-down top-bar__dropdown-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
