export function Hero2() {
  return (
    <div class="hero-2 aspect-[414/550] sm:aspect-[192/65]">
      <img
        src="https://picsum.photos/id/197/2000/1800"
        alt="background image"
        class="hero-2__bg"
      />

      <div class="container">
        <div class="hero-2__content">
          <img src="/images/organic-food-logo.svg" alt="Organic logo" />
          <p class="hero-2__text-1">orange juice</p>
          <p class="hero-2__text-2">for human health</p>
          <p class="hero-2__text-3 hidden sm:block">
            Organic food is food produced by methods that comply with the
            standards of organic farming.
            <br />
            Standards vary worldwide, but organic farming in general features.
          </p>
          <a href="" class="hero-2__btn">
            GO SHOP
          </a>
        </div>
      </div>
    </div>
  );
}
