export function Contact() {
  return (
    <div class="contact">
      <p class="contact__title">NEED HELP</p>

      <div class="contact__method">
        <img
          src="/images/phone.svg"
          alt="phone"
          class="contact__icon contact__icon--phone"
        />
        <a href="tel:0003929632" class="contact__detail contact__detail--phone">
          00 0392 96 32
        </a>
      </div>

      <div class="contact__method contact__method--2">
        <p class="contact__detail contact__detail--wrk-hour">
          Monday - Friday : 9:00 - 22:00
          <br />
          Saturday: 11:00 - 14:00
        </p>
      </div>

      <div class="contact__method">
        <img src="/images/Email.svg" alt="mail" class="contact__icon" />
        <a href="mailto:oder@freshen.com" class="contact__detail">
          oder@freshen.com
        </a>
      </div>
    </div>
  );
}
