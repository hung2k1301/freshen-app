export function NavArrow(): JSX.Element {
  return (
    <>
      <button className="nav-arrow">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="nav-arrow nav-arrow__right nav-arrow__active">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </>
  );
}
