export function Banner(): JSX.Element {
  return (
    <div className="banner px-12 xl:pl-[111px] xl:pr-[79px]">
      <img
        src="/images/banner-image-1.png"
        alt="Banner Image"
        className="banner__img"
      />
      <img
        src="/images/banner-image-2.png"
        alt="Banner Image"
        className="banner__img"
      />
      <img
        src="/images/banner-image-3.png"
        alt="Banner Image"
        className="banner__img"
      />
      <img
        src="/images/banner-image-4.png"
        alt="Banner Image"
        className="banner__img hidden sm:block"
      />
      <img
        src="/images/banner-image-5.png"
        alt="Banner Image"
        className="banner__img hidden sm:block"
      />
    </div>
  );
}
