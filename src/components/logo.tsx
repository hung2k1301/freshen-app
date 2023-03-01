export function Logo(): JSX.Element {
  return (
    <div className="logo">
      <img src="/images/logo.svg" alt="" className="logo__img" />
      <div className="logo__content">
        <h1 className="logo__heading">FRESHEN</h1>
        <p className="logo__subheading">ORGANIC STORE</p>
      </div>
    </div>
  );
}
