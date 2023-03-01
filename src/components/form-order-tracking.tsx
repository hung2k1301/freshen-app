export function FormOrderTracking(): JSX.Element {
  return (
    <div className="form-order-tracking">
      <p className="form-order-tracking__note">
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>

      <form action="" className="form-order-tracking__container">
        <div className="form-order-tracking__section">
          <label htmlFor="userName" className="form-order-tracking__label">
            Order ID
          </label>
          <input
            type="text"
            name=""
            id="userName"
            className="form-order-tracking__input"
          />
        </div>

        <div className="form-order-tracking__section">
          <label htmlFor="password" className="form-order-tracking__label">
            Billing email
          </label>
          <input
            type="text"
            name=""
            id="password"
            className="form-order-tracking__input"
          />
        </div>

        <button
          type="submit"
          className="form-order-tracking__btn w-full md:max-w-[180px]"
        >
          TRACK
        </button>
      </form>
    </div>
  );
}
