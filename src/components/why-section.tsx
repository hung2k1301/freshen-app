import { IWhySection } from "@/types";
import { getWhySection } from "@/services/api";
import { useQuery } from "react-query";

export function WhySection(): JSX.Element {
  const { isLoading, data } = useQuery<IWhySection[]>(
    "whySection",
    getWhySection
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((whyData, index) => (
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
