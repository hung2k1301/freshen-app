export function AccountInfo(): JSX.Element {
  return (
    <div className="account-info">
      <button className="account-info__icon hidden xl:inline">
        <img src="/images/user-icon.svg" alt="User" />
      </button>

      <button className="account-info__icon hidden xl:inline">
        <span className="account-info__badge">2</span>
        <img src="/images/heart.svg" alt="Heart" />
      </button>

      <button className="account-info__icon">
        <span className="account-info__badge">3</span>
        <img src="/images/cart.svg" alt="Cart" />
        <span className="account-info__cart-total-price hidden xl:inline">
          $240.93
        </span>
      </button>
    </div>
  );
}
