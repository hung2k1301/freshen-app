import { getCategories } from "@/services/api";
import { ICategory } from "@/types";
import { useQuery } from "react-query";

export function CardCategory(): JSX.Element {
  const { isLoading, data } = useQuery<ICategory[]>(
    "home-page-categories",
    getCategories
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.map((category, index) => (
        <a href="" className="card-category" key={index}>
          <div
            className={`card-category__thumbnail ${
              category.isActive ? "card-category__thumbnail--active" : ""
            }`}
          >
            <img src={category.thumbnail} alt={category.name} />
          </div>
          <p
            className={`card-category__name ${
              category.isActive ? "card-category__name--active" : ""
            }`}
          >
            {category.name}
          </p>
        </a>
      ))}
    </>
  );
}
