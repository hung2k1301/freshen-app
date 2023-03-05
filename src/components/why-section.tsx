interface WhySection {
  image: string;
  alt: string;
  text1: string;
  text2: string;
}

const whySection: WhySection[] = [
  {
    image: "/images/scooter.svg",
    alt: "scooter",
    text1: "we drive fast & ship faster",
    text2:
      "Sed semper convallis ultricies. Aliqua erat vol esent friday ngilla augue.",
  },
  {
    image: "/images/cash.svg",
    alt: "cash",
    text1: "we save your more money",
    text2:
      "Sed semper convallis ultricies. Aliqua erat vol esent friday ngilla augue.",
  },
  {
    image: "/images/sale-tag-icon.svg",
    alt: "sale-tag-icon",
    text1: "daily discount coupons",
    text2:
      "Sed semper convallis ultricies. Aliqua erat vol esent friday ngilla augue.",
  },
];

export function WhySection(): JSX.Element {
  return (
    <>
      {whySection.map((whyData, index) => (
        <div className="col-span-full lg:col-span-4" key={index}>
          <div className="why">
            <div className="why__img-bg">
              <img src={whyData.image} alt={whyData.alt} className="why__img" />
            </div>

            <p className="why__text-1">{whyData.text1}</p>
            <p className="why__text-2">{whyData.text2}</p>
          </div>
        </div>
      ))}
    </>
  );
}
