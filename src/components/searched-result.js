export function SearchedResult() {
  return (
    <div class="searched-result">
      <p class="searched-result__text">
        Showing
        <span class="searched-result__text--bold">1 - 25</span>
        of
        <span class="searched-result__text--bold">56</span>
        results
      </p>

      <div class="searched-result__mode">
        <button class="searched-result__btn">
          <i class="fa-solid fa-sliders searched-result__filter-icon"></i>
          Filter
        </button>
        <button class="searched-result__btn">
          Default sorting
          <i class="fa-solid fa-angle-down searched-result__arrow-icon"></i>
        </button>

        <div class="searched-result__list-type">
          <div class="inline lg:flex gap-x-6">
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
