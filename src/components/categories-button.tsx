export function CategoriesButton(): JSX.Element {
  return (
    <button className="categories-button">
      <img
        src="/images/nav_icon.svg"
        className="categories-button__nav-icon"
        alt="Nav-icon"
      />
      <span className="categories-button__text">ALL CATEGORIES</span>
      <i className="fa-solid fa-chevron-down categories-button__arrow"></i>
    </button>
  );
}
