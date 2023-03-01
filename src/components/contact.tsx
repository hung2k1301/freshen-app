export function Contact(): JSX.Element {
  return (
    <div className="contact">
      <p className="contact__title">NEED HELP</p>

      <div className="contact__method">
        <img
          src="/images/phone.svg"
          alt="phone"
          className="contact__icon contact__icon--phone"
        />
        <a href="tel:0003929632" className="contact__detail contact__detail--phone">
          00 0392 96 32
        </a>
      </div>

      <div className="contact__method contact__method--2">
        <p className="contact__detail contact__detail--wrk-hour">
          Monday - Friday : 9:00 - 22:00
          <br />
          Saturday: 11:00 - 14:00
        </p>
      </div>

      <div className="contact__method">
        <img src="/images/Email.svg" alt="mail" className="contact__icon" />
        <a href="mailto:oder@freshen.com" className="contact__detail">
          oder@freshen.com
        </a>
      </div>
    </div>
  );
}
