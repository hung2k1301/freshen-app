export function SearchBar(): JSX.Element {
  return (
    <div className="search-bar">
      <button className="search-bar__drop-down">
        <span className="search-bar__drop-down-text">All Category</span>
        <i className="fa-solid fa-caret-down"></i>
      </button>
      <input
        type="text"
        name="search"
        className="search-bar__input"
        placeholder="I'm shopping for..."
      />
      <button className="search-bar__submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
