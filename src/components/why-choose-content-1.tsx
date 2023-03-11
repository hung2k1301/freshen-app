import { IWhyChooseContent } from "@/types";
import { getWhyChooseContent1 } from "@/services/api";
import { useQuery } from "react-query";

export function WhyChooseContent1(): JSX.Element {
  const { isLoading, data } = useQuery<IWhyChooseContent[]>(
    "whyChooseContent1",
    getWhyChooseContent1
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((contentData, index) => (
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
    </>
  );
}
