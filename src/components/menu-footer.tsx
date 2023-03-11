import { getMenuFooter } from "@/services/api";
import { IMenuFooter } from "@/types";
import { useQuery } from "react-query";

export function MenuFooter(): JSX.Element {
  const { isLoading, data } = useQuery<IMenuFooter[]>(
    "home-page-menuFooter",
    getMenuFooter
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((menuData, index) => (
        <div className="col-span-full sm:col-span-2" key={index}>
          <div className="menu-footer-2" key={index}>
            <p className="menu-footer-2__title">{menuData.title}</p>

            <ul className="menu-footer-2__list">
              {Object.values(menuData).map((detail, detailIndex) => {
                if (detailIndex > 0 && typeof detail === "string") {
                  return (
                    <li key={detailIndex}>
                      <a href="" className={`menu-footer-2__detail`}>
                        {detail}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
