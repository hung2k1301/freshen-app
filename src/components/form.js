export function Form() {
  return (
    <div class="form">
      <h2 class="form__heading">Have Questions? Get in touch!</h2>

      <form action="">
        <div class="grid grid-cols-7">
          <div class="col-span-3">
            <label for="name" class="form__input-heading">
              Name
            </label>
            <input type="text" id="name" class="form__input" />
          </div>

          <div class="col-start-5 col-span-full">
            <label for="lastName" class="form__input-heading">
              Last Name
            </label>
            <input type="text" id="lastName" class="form__input" />
          </div>

          <div class="col-span-3">
            <label for="email" class="form__input-heading">
              Email
            </label>
            <input type="email" id="email" class="form__input" />
          </div>

          <div class="col-start-5 col-span-full">
            <label for="phone" class="form__input-heading">
              Phone
            </label>
            <input type="tel" id="phone" class="form__input" />
          </div>
        </div>

        <label for="message" class="form__input-heading">
          Message
        </label>
        <input
          type="text"
          id="message"
          class="form__input form__input--large"
        />
      </form>

      <button type="submit" class="form__btn">
        GET IN TOUCH
      </button>
    </div>
  );
}
