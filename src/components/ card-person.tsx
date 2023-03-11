import { ICardPerson } from "@/types";
import { getCardPerson } from "@/services/api";
import { useQuery } from "react-query";

export function CardPerson(): JSX.Element {
  const { isLoading, data } = useQuery<ICardPerson[]>(
    "cardPerson",
    getCardPerson
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((cardData, index) => (
        <div className="col-span-2 xl:col-span-2" key={index}>
          <div className="card-person">
            {cardData.isActive ? (
              <>
                <div className="card-person__thumbnail">
                  <img
                    src="https://picsum.photos/id/437/800/800"
                    alt=""
                    className="card-person__img"
                  />
                  <div
                    className={`card-person__layer ${cardData.activeLayer}`}
                  ></div>
                </div>

                <div className="card-person__title">
                  <p className="card-person__name">{cardData.name}</p>
                  <p className="card-person__position">{cardData.position} </p>
                </div>

                <div
                  className={`card-person__contact ${cardData.activeContact}`}
                >
                  <a href="">
                    <img src="/images/fb-icon-black.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/twitter-icon-green.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/ig-icon-black.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/pinterest-icon-white.svg" alt="" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="card-person__thumbnail">
                  <img
                    src="https://picsum.photos/id/437/800/800"
                    alt=""
                    className="card-person__img"
                  />
                  <div className="card-person__layer"></div>
                </div>

                <div className="card-person__title">
                  <p className="card-person__name">{cardData.name}</p>
                  <p className="card-person__position">{cardData.position}</p>
                </div>

                <div className="card-person__contact">
                  <a href="">
                    <img src="/images/fb-icon-black.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/twitter-icon-green.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/ig-icon-black.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/pinterest-icon-white.svg" alt="" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
