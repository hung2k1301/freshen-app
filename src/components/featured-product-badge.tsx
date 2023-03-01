export function FeaturedProductBadge(): JSX.Element {
  return (
    <div className="ft-product-badge gap-0 md:gap-10">
      <button className="ft-product-badge__btn">all</button>
      <button className="ft-product-badge__btn">butter & eggs</button>
      <button className="ft-product-badge__btn hidden md:inline">fruits</button>
      <button className="ft-product-badge__btn ft-product-badge__btn--active">
        vegetables
      </button>
      <button className="ft-product-badge__btn hidden md:inline">bread</button>
    </div>
  );
}
