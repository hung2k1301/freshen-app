export function Hero3(): JSX.Element {
  return (
    <div className="hero-3">
      <div className="container pt-32 pb-20">
        <div className="hero-3__intro">
          <p className="hero-3__text-2 text-[25px] md:text-[40px] lg:text-[50px]">
            shop
          </p>
          <a href="" className="hero-3__btn">
            home
          </a>
          <span> / </span>
          <a href="" className="hero-3__btn hero-3__btn--bold">
            shop
          </a>
        </div>
      </div>

      <img
        src="/images/farmer.svg"
        className="hero__farmer"
        alt="Farmer Image"
      />
    </div>
  );
}
