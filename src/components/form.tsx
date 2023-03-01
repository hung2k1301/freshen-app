export function Form(): JSX.Element {
  return (
    <div className="form">
      <h2 className="form__heading">Have Questions? Get in touch!</h2>

      <form action="">
        <div className="grid grid-cols-7">
          <div className="col-span-3">
            <label htmlFor="name" className="form__input-heading">
              Name
            </label>
            <input type="text" id="name" className="form__input" />
          </div>

          <div className="col-start-5 col-span-full">
            <label htmlFor="lastName" className="form__input-heading">
              Last Name
            </label>
            <input type="text" id="lastName" className="form__input" />
          </div>

          <div className="col-span-3">
            <label htmlFor="email" className="form__input-heading">
              Email
            </label>
            <input type="email" id="email" className="form__input" />
          </div>

          <div className="col-start-5 col-span-full">
            <label htmlFor="phone" className="form__input-heading">
              Phone
            </label>
            <input type="tel" id="phone" className="form__input" />
          </div>
        </div>

        <label htmlFor="message" className="form__input-heading">
          Message
        </label>
        <input
          type="text"
          id="message"
          className="form__input form__input--large"
        />
      </form>

      <button type="submit" className="form__btn">
        GET IN TOUCH
      </button>
    </div>
  );
}
