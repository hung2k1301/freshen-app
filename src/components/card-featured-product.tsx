import { ICardFeaturedProduct } from "@/types";
import { getCardFeaturedProduct } from "@/services/api";
import { useQuery } from "react-query";

export function CardFeaturedProduct(): JSX.Element {
  const { isLoading, data } = useQuery<ICardFeaturedProduct[]>(
    "home-page-cardFeaturedProduct",
    getCardFeaturedProduct
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((cardData, index) => (
        <div className="col-span-3 lg:col-span-4 xl:col-span-3" key={index}>
          <a
            className={`ft-product-card ${
              cardData.cardActive ? "ft-product-card--active" : ""
            } pt-5 xl:pt-[11px] px-0 xl:px-[30px]`}
            href=""
          >
            <div className="ft-product-card__thumbnail">
              <img
                src="https://picsum.photos/id/75/200/300"
                alt="Featured Product"
                className="ft-product-card__img"
              />

              {cardData.isTag && (
                <div className="ft-product-card__tag">
                  <div className="ft-product-card__common ft-product-card__state">
                    hot
                  </div>
                  <div className="ft-product-card__common ft-product-card__deal">
                    -4 %
                  </div>
                </div>
              )}

              <div
                className={`ft-product-card__behaviour ${
                  cardData.behaviourActive
                    ? "ft-product-card__behaviour--active"
                    : ""
                } hidden xl:flex border-none xl:border-solid"`}
              >
                <div className="ft-product-card__save">
                  <img src="/images/green-heart.svg" alt="Save icon" />
                </div>
                <img src="/images/black-search.svg" alt="Search" />
                <img src="/images/compare-icon.svg" alt="Compare" />
              </div>
              <img
                src="/images/heart.svg"
                alt="Save icon"
                className="absolute top-[-18px] right-[-20px] xl:hidden"
              />
            </div>

            <p className="ft-product-card__title">{cardData.title}</p>

            <span>
              <i className="fa-solid fa-star ft-product-card__star"></i>
              <i className="fa-solid fa-star ft-product-card__star"></i>
              <i className="fa-solid fa-star ft-product-card__star"></i>
              <i className="fa-solid fa-star ft-product-card__star"></i>
              <i className="fa-solid fa-star ft-product-card__star ft-product-card__star--grey"></i>
            </span>

            <p className="ft-product-card__name">{cardData.name}</p>
            <p className="ft-product-card__volume">{cardData.volume}</p>

            <div className="ft-product-card__price-container">
              <p className="ft-product-card__price">${cardData.price}</p>

              <button
                className={`ft-product-card__btn ${
                  cardData.btnActive ? "ft-product-card__btn--active" : ""
                }`}
              >
                <img src="/images/white-cart.svg" alt="cart" />
                ADD TO CART
              </button>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
