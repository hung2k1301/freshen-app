export function CategoriesButton() {
  return (
    <button class="categories-button">
      <img
        src="/images/nav_icon.svg"
        class="categories-button__nav-icon"
        alt="Nav-icon"
      />
      <span class="categories-button__text">ALL CATEGORIES</span>
      <i class="fa-solid fa-chevron-down categories-button__arrow"></i>
    </button>
  );
}
