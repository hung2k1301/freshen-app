export function FeaturedProductBadge() {
  return (
    <div class="ft-product-badge gap-0 md:gap-10">
      <button class="ft-product-badge__btn">all</button>
      <button class="ft-product-badge__btn">butter & eggs</button>
      <button class="ft-product-badge__btn hidden md:inline">fruits</button>
      <button class="ft-product-badge__btn ft-product-badge__btn--active">
        vegetables
      </button>
      <button class="ft-product-badge__btn hidden md:inline">bread</button>
    </div>
  );
}
