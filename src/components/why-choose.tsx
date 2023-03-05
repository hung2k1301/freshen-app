interface WhyChooseContent {
  backgroundColor: string;
  src: string;
  heading: string;
}

const whyChooseContent1: WhyChooseContent[] = [
  {
    backgroundColor: "#bfd6ca",
    src: "/images/love.svg",
    heading: "eat more healthfully",
  },
  {
    backgroundColor: "#ffd96a",
    src: "/images/lemon.svg",
    heading: "we have reputation",
  },
  {
    backgroundColor: "#cf3e3b",
    src: "/images/carrot.svg",
    heading: "fresh & pesticide free",
  },
];
const whyChooseContent2: WhyChooseContent[] = [
  {
    backgroundColor: "#849d6a",
    src: "/images/broccoli.svg",
    heading: "no commitment required",
  },
  {
    backgroundColor: "#4f4f4f",
    src: "/images/salad.svg",
    heading: "flexibility",
  },
  {
    backgroundColor: "#f2b23e",
    src: "/images/apple.svg",
    heading: "customization",
  },
];

export function WhyChoose(): JSX.Element {
  return (
    <div className="why-choose">
      <div className="flex flex-col md:flex-row lg:justify-between lg:gap-x-5">
        <div>
          {whyChooseContent1.map((contentData, index) => (
            <div className="why-choose__content" key={index}>
              <div className="why-choose__icon">
                <img src={contentData.src} alt="" />
              </div>
              <div className="">
                <h1 className="why-choose__heading">{contentData.heading}.</h1>
                <p className="why-choose__subheading">
                  Sed semper convallis ultricies. Aliqua erat vol esent friday.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden xl:block">
          <img
            src="https://picsum.photos/id/323/1200/900"
            alt=""
            className="why-choose__img"
          />
        </div>

        <div>
          {whyChooseContent2.map((contentData, index) => (
            <div className="why-choose__content" key={index}>
              <div className="why-choose__icon">
                <img src={contentData.src} alt="" />
              </div>
              <div className="">
                <h1 className="why-choose__heading">{contentData.heading}</h1>
                <p className="why-choose__subheading">
                  Sed semper convallis ultricies. Aliqua erat vol esent friday.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
