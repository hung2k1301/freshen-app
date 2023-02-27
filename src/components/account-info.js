export function AccountInfo() {
  return (
    <div class="account-info">
      <button class="account-info__icon hidden xl:inline">
        <img src="/images/user-icon.svg" alt="User" />
      </button>

      <button class="account-info__icon hidden xl:inline">
        <span class="account-info__badge">2</span>
        <img src="/images/heart.svg" alt="Heart" />
      </button>

      <button class="account-info__icon">
        <span class="account-info__badge">3</span>
        <img src="/images/cart.svg" alt="Cart" />
        <span class="account-info__cart-total-price hidden xl:inline">
          $240.93
        </span>
      </button>
    </div>
  );
}
