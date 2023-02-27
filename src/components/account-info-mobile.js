export function AccountInfoMobile() {
  return (
    <div class="account-info-mobile">
      <button href="" class="account-info-mobile__group">
        <img src="/images/shop.svg" alt="Shop" />
        <span class="account-info-mobile__title">shop</span>
      </button>

      <button href="" class="account-info-mobile__group">
        <img src="/images/heart.svg" alt="Wishlist" />
        <span class="account-info-mobile__title">wishlist</span>
      </button>

      <button href="" class="account-info-mobile__group">
        <img src="/images/user-icon.svg" alt="Account" />
        <span class="account-info-mobile__title">my account</span>
      </button>

      <div class="account-info-mobile__group">
        <button class="account-info__icon">
          <span class="account-info__badge">3</span>
          <img src="/images/cart.svg" alt="Cart" />
        </button>
        <span class="account-info-mobile__title">cart</span>
      </div>
    </div>
  );
}
