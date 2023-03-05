interface Location {
  heading: string;
}

const storeLocation: Location[] = [
  { heading: "london" },
  { heading: "istanbul" },
  { heading: "new york" },
];

export function StoreLocation(): JSX.Element {
  return (
    <>
      {storeLocation.map((locationData, index) => (
        <div className="store-location" key={index}>
          <h2 className="store-location__heading">
            store in {locationData.heading}
          </h2>

          <p className="store-location__info">
            1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            <br />
            +1 246-345-0695
            <br />
            10 am - 10 pm EST, 7 days a week
          </p>

          <a href="" className="store-location__btn">
            SEE ON THE MAP
            <span className="store-location__underline"></span>
          </a>
        </div>
      ))}
    </>
  );
}
