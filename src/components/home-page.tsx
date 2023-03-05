import Header from "./header";
import { Hero } from "./hero";
import { CardCategory } from "./card-category";
import { Banner2 } from "./banner-2";
import { CardFeaturedProduct } from "./card-featured-product";
import { FeaturedProductBadge } from "./featured-product-badge";
import { OrderService } from "./order-service";
import { CardDealDay } from "./card-deal-of-the-day";
import { Hero2 } from "./hero-2";
import { Banner } from "./banner";
import { CardBlog } from "./card-blog";
import { WhySection } from "./why-section";
import { CardInstagram } from "./card-instagram";
import Footer from "@/components/footer";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header></Header>

      <div className="mt-3 mb-24">
        <Hero></Hero>
      </div>

      {/* -- CardCategory component -- */}
      <div className="container mb-24">
        <div className="mb-8">
          <h2 className="heading-section text-[24px] lg:text-[30px]">
            top categories of the month
          </h2>
        </div>
        {/* -- mobile --  */}
        <div className="glide-1 relative xl:hidden">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              <CardCategory></CardCategory>
            </div>
          </div>

          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2"
              data-glide-dir="<"
            >
              <div className="nav-arrow-2">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            </button>
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2"
              data-glide-dir=">"
            >
              <div className="nav-arrow-2 nav-arrow-2__right nav-arrow-2__active">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            </button>
          </div>
        </div>
        {/* -- mobile -- */}

        {/* -- desktop -- */}
        <div className="hidden xl:flex xl:justify-between">
          <CardCategory></CardCategory>
        </div>
        {/* -- desktop -- */}
      </div>
      {/* -- CardCategory component -- */}

      {/* -- Banner2 component -- */}
      <div className="mb-24">
        <Banner2></Banner2>
      </div>
      {/* -- Banner2 component -- */}

      {/* -- CardFeaturedProduct component -- */}
      <div className="container">
        {/* -- FeaturedProductBadge -- */}
        <h2 className="heading-section text-[24px] md:text-[30px]">
          featured products
        </h2>
        <div className="flex justify-center mt-9 mb-12">
          <FeaturedProductBadge></FeaturedProductBadge>
        </div>
        {/* -- FeaturedProductBadge -- */}

        {/* -- mobile -- */}
        <div className="glide-2 relative xl:hidden">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              <CardFeaturedProduct></CardFeaturedProduct>
            </div>
          </div>

          <div className="" data-glide-el="controls">
            <button
              className="nav-arrow absolute top-1/2 left-0"
              data-glide-dir="<"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              className="nav-arrow nav-arrow__right nav-arrow__active absolute top-1/2 right-0"
              data-glide-dir=">"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2"
            data-glide-el="controls[nav]"
          >
            <button
              className="nav-bullets__bullet"
              data-glide-dir="=0"
            ></button>
            <button
              className="nav-bullets__bullet nav-bullets__bullet--active"
              data-glide-dir="=1"
            ></button>
            <button
              className="nav-bullets__bullet"
              data-glide-dir="=2"
            ></button>
            <button
              className="nav-bullets__bullet"
              data-glide-dir="=3"
            ></button>
            <button
              className="nav-bullets__bullet"
              data-glide-dir="=4"
            ></button>
          </div>
        </div>
        {/* -- mobile  -- */}

        {/* -- desktop -- */}
        <div className="hidden xl:grid xl:grid-cols-12 gap-7">
          <CardFeaturedProduct></CardFeaturedProduct>
        </div>
        {/* -- desktop -- */}
      </div>
      {/* -- CardFeaturedProduct component  -- */}

      {/* -- OrderService component -- */}
      <div className="container mt-32 mb-24">
        <OrderService></OrderService>
      </div>
      {/* -- Order-service component -- */}

      <h2 className="heading-section mb-10 flex-col xl:flex-row text-[24px] xl:text-[30px]">
        deal of the day
        <span className="heading-section__badge px-12 xl:px-8">
          ends in: 04:43:11
        </span>
      </h2>
      {/* -- CardDealDay component -- */}
      <div className="container mb-24">
        {/* -- mobile -- */}
        <div className="glide-2 relative xl:hidden">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              <CardDealDay></CardDealDay>
            </div>
          </div>

          <div className="" data-glide-el="controls">
            <button
              className="nav-arrow absolute top-1/2 left-0"
              data-glide-dir="<"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              className="nav-arrow nav-arrow__right nav-arrow__active absolute top-1/2 right-0"
              data-glide-dir=">"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        {/* -- mobile  -- */}

        {/* -- desktop -- */}
        <div className="hidden xl:grid xl:grid-cols-12 gap-x-7">
          <CardDealDay></CardDealDay>
        </div>
        {/* -- desktop -- */}
      </div>
      {/* -- CardDealDay component -- */}

      <Hero2></Hero2>

      {/* -- Banner component -- */}
      <div className="container -translate-y-12 mb-24">
        <Banner></Banner>
      </div>
      {/* -- Banner component -- */}

      <h2 className="heading-section mb-7 text-[24px] lg:text-[30px]">
        our blog
      </h2>
      {/* -- CardBlog component -- */}
      <div className="container mb-32">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-7">
          <CardBlog></CardBlog>
        </div>
      </div>
      {/* -- CardBlog component -- */}

      <h2 className="heading-section mb-7 text-[24px] lg:text-[30px]">
        why choose us
      </h2>
      {/* -- WhySection component -- */}
      <div className="container mb-24">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-8">
          <WhySection></WhySection>
        </div>
      </div>
      {/* -- WhySection component -- */}

      <h2 className="heading-section mb-6 text-[24px] lg:text-[30px]">
        follow @freshen on instagram
      </h2>
      {/* -- CardInstagram component -- */}
      <div className="container mb-32">
        <div className="grid grid-cols-10 gap-2">
          <CardInstagram></CardInstagram>
        </div>
      </div>
      {/* -- CardInstagram component -- */}

      <Footer></Footer>
    </>
  );
}
