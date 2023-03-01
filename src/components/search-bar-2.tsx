export function SearchBar2(): JSX.Element {
  return (
    <div className="search-bar-2">
      <input
        type="text"
        name="subscribe"
        placeholder="Enter your country or city"
        className="search-bar-2__input"
      />

      <button className="search-bar-2__btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
