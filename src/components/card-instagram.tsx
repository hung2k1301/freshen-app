interface CardIg {
  isActive?: boolean;
  iconActive?: string;
}

const cardInstagram: CardIg[] = [
  {},
  { isActive: true, iconActive: "card-ig__icon--active" },
  {},
  {},
  {},
];

export function CardInstagram(): JSX.Element {
  return (
    <>
      {cardInstagram.map((cardData, index) => (
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
