export function SearchBar() {
  return (
    <div class="search-bar">
      <button class="search-bar__drop-down">
        <span class="search-bar__drop-down-text">All Category</span>
        <i class="fa-solid fa-caret-down"></i>
      </button>
      <input
        type="text"
        name="search"
        class="search-bar__input"
        placeholder="I'm shopping for..."
      />
      <button class="search-bar__submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
