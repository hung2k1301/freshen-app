import { AccountInfoMobile } from "./account-info-mobile";

export function Hero(): JSX.Element {
  return (
    <div className="hero aspect-[414/792] xl:aspect-[192/60]">
      <div className="container pt-36">
        <div className="hero__intro">
          <p className="hero__text-1">ALL NATURAL PRODUCTS</p>
          <p className="hero__text-2">
            HEALTHY FOOD
            <br />
            <span className="hero__text-2-separate">& ORGANIC MARKET</span>
          </p>
          <p className="hero__text-3">
            <span className="hero__text-3-separate">Organic food</span>
            is food produced by methods that comply with the
            <br />
            standards of organic farming.
          </p>
          <a href="" className="hero__btn">
            SHOP NOW
          </a>
        </div>
      </div>

      <img
        src="/images/farmer.svg"
        className="hero__farmer relative w-full xl:w-2/4 xl:absolute"
        alt="Farmer Image"
      />

      <div className="absolute inset-x-2.5 bottom-2.5 xl:hidden">
        <AccountInfoMobile></AccountInfoMobile>
      </div>
    </div>
  );
}
