export function FormOrderTracking() {
  return (
    <div class="form-order-tracking">
      <p class="form-order-tracking__note">
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>

      <form action="" class="form-order-tracking__container">
        <div class="form-order-tracking__section">
          <label for="userName" class="form-order-tracking__label">
            Order ID
          </label>
          <input
            type="text"
            name=""
            id="userName"
            class="form-order-tracking__input"
          />
        </div>

        <div class="form-order-tracking__section">
          <label for="password" class="form-order-tracking__label">
            Billing email
          </label>
          <input
            type="text"
            name=""
            id="password"
            class="form-order-tracking__input"
          />
        </div>

        <button
          type="submit"
          class="form-order-tracking__btn w-full md:max-w-[180px]"
        >
          TRACK
        </button>
      </form>
    </div>
  );
}
