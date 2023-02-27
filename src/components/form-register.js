export function FormRegister() {
  return (
    <div class="form-register">
      <a href="" class="form-register__title">
        LOGIN
      </a>
      <a href="" class="form-register__title form-register__title--active">
        REGISTER
      </a>

      <form action="" class="form-register__container">
        <div class="form-register__section">
          <label for="userName" class="form-register__label">
            Username or email address *
          </label>
          <input
            type="text"
            name=""
            id="userName"
            class="form-register__input"
            required
          />
        </div>

        <div class="form-register__section">
          <label for="password" class="form-register__label">
            Email address *
          </label>
          <input
            type="text"
            name=""
            id="password"
            class="form-register__input"
            required
          />
        </div>

        <div class="form-register__section form-register__section--margin">
          <label for="password" class="form-register__label">
            Password *
          </label>
          <input
            type="text"
            name=""
            id="password"
            class="form-register__input"
            required
          />
        </div>

        <p class="form-register__note">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>

        <button
          type="submit"
          class="form-register__btn w-full md:max-w-[180px]"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}
