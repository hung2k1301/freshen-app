export function AccountInfoMobile(): JSX.Element {
  return (
    <div className="account-info-mobile">
      <button className="account-info-mobile__group">
        <img src="/images/shop.svg" alt="Shop" />
        <span className="account-info-mobile__title">shop</span>
      </button>

      <button className="account-info-mobile__group">
        <img src="/images/heart.svg" alt="Wishlist" />
        <span className="account-info-mobile__title">wishlist</span>
      </button>

      <button className="account-info-mobile__group">
        <img src="/images/user-icon.svg" alt="Account" />
        <span className="account-info-mobile__title">my account</span>
      </button>

      <div className="account-info-mobile__group">
        <button className="account-info__icon">
          <span className="account-info__badge">3</span>
          <img src="/images/cart.svg" alt="Cart" />
        </button>
        <span className="account-info-mobile__title">cart</span>
      </div>
    </div>
  );
}
