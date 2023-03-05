interface CardPersonData {
  name: string;
  position: string;
  isActive?: boolean;
  activeLayer?: string;
  activeContact?: string;
}

const cardPerson: CardPersonData[] = [
  { name: "wade warren", position: "marketing coordinator" },
  {
    isActive: true,
    activeLayer: "card-person__layer--active",
    name: "floyd miles",
    position: "web designer",
    activeContact: "card-person__contact--active",
  },
  { name: "brooklyn simmons", position: "nursing assistant" },
  { name: "ralph edwards", position: "marketing coordinator" },
  { name: "leslie alexander", position: "dog trainer" },
  { name: "eleanor pena", position: "presidentof sales" },
];

export function CardPerson(): JSX.Element {
  return (
    <>
      {cardPerson.map((cardData, index) => (
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
                  <div className="card-person__layer {{this.active-layer}}"></div>
                </div>

                <div className="card-person__title">
                  <p className="card-person__name">{cardData.name}</p>
                  <p className="card-person__position">{cardData.position} </p>
                </div>

                <div className="card-person__contact {{this.active-contact}}">
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
