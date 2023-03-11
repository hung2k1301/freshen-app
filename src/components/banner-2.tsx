import { IBanner2 } from "@/types";
import { getBanner2 } from "@/services/api";
import { useQuery } from "react-query";

export function Banner2(): JSX.Element {
  const { isLoading, data } = useQuery<IBanner2[]>(
    "home-page-banner2",
    getBanner2
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-6">
          <div className="banner-2">
            <img
              src="https://picsum.photos/id/122/800/400"
              alt="promotion image"
              className="banner-2__bg-img"
            />

            <div className="banner-2__content">
              <p className="banner-2__text-1">fresh fruit</p>
              <p className="banner-2__text-2 text-[24px] xl:text-[29px]">
                fresh summer with
                <br />
                just $200.99
              </p>
              <a href="" className="banner-2__btn">
                shop now
                <span className="banner-2__btn-effect"></span>
              </a>
            </div>
          </div>
        </div>

        {data?.map((data, index) => (
          <div className="col-span-12 lg:col-span-3" key={index}>
            <div className="banner-2">
              <img
                src={data.src}
                alt="promotion background"
                className="banner-2__bg-img"
              />

              <div className="banner-2__content">
                <p className="banner-2__text-1 banner-2__text--black">
                  {data.text1}
                </p>
                <p className="banner-2__text-2 banner-2__text--black text-[24px] xl:text-[29px]">
                  {data.text2}
                  <br />
                  <span className="banner-2__text-separate banner-2__text--green">
                    {data.textSeparate}
                  </span>
                </p>
                <a href="" className="banner-2__btn banner-2__btn--dark">
                  shop now
                  <span className="banner-2__btn-effect"></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
