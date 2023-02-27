import { AccountInfoMobile } from "./account-info-mobile";

export function Hero() {
  return (
    <div class="hero aspect-[414/792] xl:aspect-[192/60]">
      <div class="container pt-36">
        <div class="hero__intro">
          <p class="hero__text-1">ALL NATURAL PRODUCTS</p>
          <p class="hero__text-2">
            HEALTHY FOOD
            <br />
            <span class="hero__text-2-separate">& ORGANIC MARKET</span>
          </p>
          <p class="hero__text-3">
            <span class="hero__text-3-separate">Organic food</span>
            is food produced by methods that comply with the
            <br />
            standards of organic farming.
          </p>
          <a href="" class="hero__btn">
            SHOP NOW
          </a>
        </div>
      </div>

      <img
        src="/images/farmer.svg"
        class="hero__farmer relative w-full xl:w-2/4 xl:absolute"
        alt="Farmer Image"
      />

      <div class="absolute inset-x-2.5 bottom-2.5 xl:hidden">
        <AccountInfoMobile></AccountInfoMobile>
      </div>
    </div>
  );
}
