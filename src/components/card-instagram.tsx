import { ICardIg } from "@/types";
import { getCardInstagram } from "@/services/api";
import { useQuery } from "react-query";

export function CardInstagram(): JSX.Element {
  const { isLoading, data } = useQuery<ICardIg[]>(
    "home-page-cardInstagram",
    getCardInstagram
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((cardData, index) => (
        <div className="col-span-2" key={index}>
          <a href="" className="card-ig">
            <img
              src="https://picsum.photos/id/204/200/300"
              alt="IG image"
              className="card-ig__img"
            />

            {cardData.isActive ? (
              <div className={`card-ig__icon ${cardData.iconActive}`}>
                <i className="fa-brands fa-instagram"></i>
              </div>
            ) : (
              <div className="card-ig__icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
            )}
          </a>
        </div>
      ))}
    </>
  );
}
