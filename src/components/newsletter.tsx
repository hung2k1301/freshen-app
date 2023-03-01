export function NewsLetter(): JSX.Element {
  return (
    <div className="newsletter">
      <img
        src="/images/newsletter-icon.svg"
        alt="newsletter"
        className="newsletter__img"
      />
      <div className="newsletter__content">
        <h1 className="newsletter__heading">SIGN UP FOR NEWSLETTER</h1>
        <p className="newsletter__subheading">
          Subcribe to the weekly newsletter for all the latest updates
        </p>
      </div>
    </div>
  );
}
