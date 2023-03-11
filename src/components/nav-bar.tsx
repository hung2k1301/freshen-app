import { INavBar } from "@/types";
import { getNavbar } from "@/services/api";
import { useQuery } from "react-query";

export function NavBar(): JSX.Element {
  const { isLoading, data } = useQuery<INavBar[]>(
    "home-page-navBar",
    getNavbar
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <nav className="nav-bar">
      {data?.map((data, index) => (
        <a href="" className="nav-bar__menu" key={index}>
          <span className="nav-bar__name">{data.name}</span>
          {data.arrowIcon && (
            <i className="fa-solid fa-chevron-down nav-bar__arrow-icon"></i>
          )}
        </a>
      ))}
    </nav>
  );
}
