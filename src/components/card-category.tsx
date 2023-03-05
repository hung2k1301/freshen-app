interface CategoryData {
  thumbnail: string;
  name: string;
  isActive?: boolean;
}

const categories: CategoryData[] = [
  { thumbnail: "/images/food-grocery.svg", name: "food & grocery" },
  { thumbnail: "/images/bread.svg", name: "bakery" },
  { thumbnail: "/images/vegetables.svg", name: "vegetables", isActive: true },
  { thumbnail: "/images/pineapple.svg", name: "fruits" },
  { thumbnail: "/images/salmon.svg", name: "sea food" },
  { thumbnail: "/images/steak.svg", name: "fresh meat" },
  { thumbnail: "/images/egg.svg", name: "butter & eggs" },
  { thumbnail: "/images/milk.svg", name: "milks & creams" },
];

export function CardCategory(): JSX.Element {
  return (
    <>
      {categories.map((category, index) => (
        <a href="" className="card-category" key={index}>
          {category.isActive ? (
            <>
              <div className="card-category__thumbnail card-category__thumbnail--active">
                <img src={category.thumbnail} alt={category.name} />
              </div>
              <p className="card-category__name card-category__name--active">
                {category.name}
              </p>
            </>
          ) : (
            <>
              <div className="card-category__thumbnail">
                <img src={category.thumbnail} alt={category.name} />
              </div>
              <p className="card-category__name">{category.name}</p>
            </>
          )}
        </a>
      ))}
    </>
  );
}
