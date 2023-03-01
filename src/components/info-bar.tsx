export function InfoBar(): JSX.Element {
  return (
    <div className="info-bar">
      <div className="info-bar__component info-bar__component--mr">
        <img
          src="/images/map-icon.svg"
          alt=""
          className="info-bar__component-icon"
        />
        <h2 className="info-bar__heading">our store</h2>
        <a href="" className="info-bar__text">
          Collins Street West, Victoria
          <br />
          8007, Australia.
        </a>
      </div>

      <div className="info-bar__component info-bar__component--pd pb-6">
        <img
          src="/images/phone-icon--green.svg"
          alt=""
          className="info-bar__component-icon"
        />
        <h2 className="info-bar__heading">hotline</h2>
        <a href="tel:+(315)905-2321" className="info-bar__text">
          + (315) 905-2321
        </a>
      </div>

      <div className="info-bar__component info-bar__component--pd info-bar__component--br pb-6">
        <img
          src="/images/mail-icon--green.svg"
          alt=""
          className="info-bar__component-icon"
        />
        <h2 className="info-bar__heading">email contact</h2>
        <a href="mailto:order@freshen.com" className="info-bar__text">
          order@freshen.com
        </a>
      </div>

      <div className="info-bar__component info-bar__component--ml">
        <img
          src="/images/clock.svg"
          alt=""
          className="info-bar__component-icon"
        />
        <h2 className="info-bar__heading">working hours</h2>
        <p ref="" className="info-bar__text">
          Mon-Fri: 8 AM - 5 PM
          <br />
          Sat-Sun: 8 AM - 2 PM
        </p>
      </div>
    </div>
  );
}
