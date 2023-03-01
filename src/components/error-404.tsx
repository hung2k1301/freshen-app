export function Error404(): JSX.Element {
  return (
    <div className="error-404">
      <h2 className="error-404__heading">
        4<span className="error-404__heading--hidden">0</span>4
      </h2>

      <p className="error-404__text">
        <span className="error-404__text--bold">oops...</span>
        <br />
        <span className="error-404__text--lighter">
          We're sorry, but something went wrong.
        </span>
      </p>

      <a href="" className="error-404__btn">
        back homepage
      </a>
    </div>
  );
}
