import { ICardDealDay } from "@/types";
import { getCardDealDay } from "@/services/api";
import { useQuery } from "react-query";

export function CardDealDay(): JSX.Element {
  const { isLoading, data } = useQuery<ICardDealDay[]>(
    "home-page-cardDealDay",
    getCardDealDay
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((cardData, index) => (
        <div className="xl:col-span-3" key={index}>
          <a
            className={`card-deal-day ${
              cardData.isActive ? "card-deal-day--active" : ""
            }  px-0 xl:px-[30px]`}
            href=""
          >
            <div className="card-deal-day__thumbnail">
              <img
                src="https://picsum.photos/id/13/200/300"
                alt="Featured Product"
                className="card-deal-day__img"
              />
            </div>

            <p className="card-deal-day__title">{cardData.title}</p>

            <span>
              <i className="fa-solid fa-star card-deal-day__star"></i>
              <i className="fa-solid fa-star card-deal-day__star"></i>
              <i className="fa-solid fa-star card-deal-day__star"></i>
              <i className="fa-solid fa-star card-deal-day__star"></i>
              <i className="fa-solid fa-star card-deal-day__star card-deal-day__star--grey"></i>
            </span>

            <p className="card-deal-day__name">{cardData.name}</p>
            <p className="card-deal-day__volume">{cardData.volume}</p>
            <p className="card-deal-day__price">${cardData.price}</p>

            <div className="card-deal-day__state-bar"></div>

            <p className="card-deal-day__state-available">
              <span>
                Sold: <span className="card-deal-day__state-number">20</span>
              </span>
              <span>
                Available:
                <span className="card-deal-day__state-number">10</span>
              </span>
            </p>
          </a>
        </div>
      ))}
    </>
  );
}
