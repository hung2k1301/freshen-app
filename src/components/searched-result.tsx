export function SearchedResult(): JSX.Element {
  return (
    <div className="searched-result">
      <p className="searched-result__text">
        Showing
        <span className="searched-result__text--bold">1 - 25</span>
        of
        <span className="searched-result__text--bold">56</span>
        results
      </p>

      <div className="searched-result__mode">
        <button className="searched-result__btn">
          <i className="fa-solid fa-sliders searched-result__filter-icon"></i>
          Filter
        </button>
        <button className="searched-result__btn">
          Default sorting
          <i className="fa-solid fa-angle-down searched-result__arrow-icon"></i>
        </button>

        <div className="searched-result__list-type">
          <div className="inline lg:flex gap-x-6">
            <button>
              <img src="/images/list-type-1.svg" alt="list type 1" />
            </button>
            <button>
              <img src="/images/list-type-2.svg" alt="list type 2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
